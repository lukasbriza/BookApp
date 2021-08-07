//DEPENDENCIES//
const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function showAllBooks(req, res){
    //wait for
    await Book.find((err, result) => {
        if (err){return console.error(err);} //error handle
        if (result.length == 0){
            return res.json({books:null});
        } else {
            res.json(result);
        }
    })
}

module.exports = {
    showAllBooks
}