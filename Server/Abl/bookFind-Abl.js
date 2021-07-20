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
            return res.send(result);
        })
    }
    //search by name
    if(paramName == 'name'){
        await Book.find({name: paramValue},(err, result) => {
            if (err) {return res.send(err)}
            return res.send(result);
        })
    }
    //search by author - bude array o více vísledcích
    if(paramName == 'author'){
        await Book.find({author: paramValue},(err, result) => {
            if (err) {return res.send(err)}
            return res.send(result);
        })
    }
    res.send("Něco se nezdařilo: funkce findBook().");
}

module.exports = {
    findBook
};