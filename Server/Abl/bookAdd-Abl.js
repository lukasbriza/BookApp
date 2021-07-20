//DEPENDENCIES//
const Ajv = require("ajv").default; 
const mongoose = require('mongoose');
const {bookSchemaDB, Book} = require("../Schemas/mongooseSchema");
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
        newBook.save((err)=>{
            if(err){return handleError(err);}
            //wait for
            await res.send('Uloženo do databáze!');
        });
    }
    if(!valid){
        return res.status(400).json({error: ajv.errors});
    }
}

module.exports = {
    bookAdd
};