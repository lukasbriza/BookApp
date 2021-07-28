//DEPENDENCIES//
const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function findBook(req, res, paramName, paramValue){
    //search by _id
    if(paramName == '_id'){
        await Book.find({_id: paramValue},(err, result) => {
            if (err) {return res.send(err)}
            return res.json(result);
        })
    }
    //search by name
    else if(paramName == 'name'){
        await Book.find({name: paramValue},(err, result) => {
            if (err) {return res.send(err)}
            return res.json(result);
        })
    }
    //search by author - bude array o více
    else if(paramName == 'author'){
        await Book.find({author: paramValue},(err, result) => {
            if (err) {return res.send(err)}
            return res.json(result);
        })
    } else {
    res.status(500).json({error: "Něco se nezdařilo: funkce findBook."});
    }
}

module.exports = {
    findBook
};