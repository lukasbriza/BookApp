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
            return res.send("V databázi nejsou žádné zaznamenané knihy!");
        }
        res.send(result);
    })
}

module.exports = {
    showAllBooks
}