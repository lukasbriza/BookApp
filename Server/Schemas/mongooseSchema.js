const mongoose = require('mongoose');

const bookSchemaDB = new mongoose.Schema({
    name: {type: 'string', required: true},
    author: {type: 'string', required: true},
    description: {type: 'string', required: false},
})
const Book = mongoose.model('Book', bookSchemaDB);
//model je třída se kterou tvořím poté dokumenty

module.exports = {
    bookSchemaDB, Book};