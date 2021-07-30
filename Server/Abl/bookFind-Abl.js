//DEPENDENCIES//
const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function findBook(req, res, paramName, paramValue){
    //search by _id
    if(paramName == '_id'){
        await Book.find({_id: paramValue},(err, result) => {
            if (err) {return res.json({Error: "ERROR"})} 
            else if (result.length==0) {return res.json({Error: "ERROR"})} 
            else { 
                return res.json(result);
            }
        })
    }
    //search by name
    if(paramName == 'name'){
        await Book.find({name: paramValue},(err, result) => {
            if (err) {return res.json({Error: "ERROR"})} 
            else if (result.length==0) {return res.json({Error: "ERROR"})} 
            else { 
                return res.json(result);
            }
        })
    }
    //search by author - bude array o více
    if(paramName == 'author'){
        await Book.find({author: paramValue},(err, result) => {
            if (err) {return res.json({Error: "ERROR"})} 
            else if (result.length==0) {return res.json({Error: "ERROR"})} 
            else { 
                return res.json(result);
            }
        })
    }
}

module.exports = {
    findBook
};