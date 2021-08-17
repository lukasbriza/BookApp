//DEPENDENCIES//
const Ajv = require("ajv").default; 
const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");
const {User} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function bookAdd(req, res, schema, user){
    //find user
    const userName = user;
    const userProfile = await User.find({userName: userName},(err,result)=>{
        if(err){res.json({Error: "find ERROR"})}
        else if (result.length==0){res.json({result: false})}
        else{
            return result;
        }
    });
    console.log(userName, await userProfile);

    //add book to array
    const ajv = new Ajv();
    const valid = ajv.validate(schema,req.body);

    if(valid){
        const newBook = new Book ({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description
        })
        userProfile[0].booksOfUsers.push(newBook);
        console.log(userProfile);
        userProfile[0] = await userProfile[0].save((err,result)=>{
            if (err){return  res.json({Error: " save ERROR"});}
            return res.json(result);
        })
    } else {
        return await res.status(400).json({error: ajv.errors});
    }
}

module.exports = {
    bookAdd
};