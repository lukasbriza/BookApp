//DEPENDENCIES//
const Ajv = require("ajv").default; 
const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function bookAdd(req, res, schema){
    const ajv = new Ajv();
    const valid = ajv.validate(schema,req.body);
    
    if(valid){
        const newBook = new Book({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description
        })
        await newBook.save((err)=>{
            if(err){return handleError(err);}
            //wait for
            res.send("Kniha vložena. Její _id je: " + newBook._id);
        });
    }
    if(!valid){
        return await res.status(400).json({error: ajv.errors});
    }
}

module.exports = {
    bookAdd
};