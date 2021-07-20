//DEPENDENCIES//
const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function findBook(req, res, id){
    await Book.findById(id,(err, result) => {
        if (err) {return res.send(err)}
        res.send(result);
    })
}

module.exports = {
    findBook
};