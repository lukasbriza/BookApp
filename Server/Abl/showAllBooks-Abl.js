//DEPENDENCIES//
const mongoose = require('mongoose');
const {bookSchemaDB, Book} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function showAllBooks(req, res){
    Book.find((err, books) => {
        if (err){return console.error(err);} //error handle
        //wait for
        await res.send(books);
    })
}

module.exports = {
    showAllBooks
}