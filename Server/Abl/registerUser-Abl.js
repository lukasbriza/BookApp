//DEPENDENCIES//
const Ajv = require("ajv").default; 
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const {User} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function registerUser(req, res, schema){
    const ajv = new Ajv();
    const valid = ajv.validate(schema, req.body);

    if(valid){
        const newUser = new User({
            userName: req.body.userName,
            userPassword: await makeBcryptPassword(req.body.userPassword)
        })
        
        await newUser.save((err, doc)=>{
            if (err){return console.log(err);}
            return res.json(doc);
        });
    }
    if(!valid){
        return await res.status(400).json({error: ajv.errors});
    }
}


async function makeBcryptPassword(password){
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        console.log(salt);
        console.log(hashedPassword);

        return hashedPassword;
    } catch {
        console.log('makeBcryptPassword ERROR');
    }
}

module.exports = {registerUser};