const mongoose = require('mongoose');

const bookSchemaDB = new mongoose.Schema({
    name: {type: 'string', required: true},
    author: {type: 'string', required: true},
    description: {type: 'string', required: false},
});
const Book = mongoose.model('Book', bookSchemaDB, 'Users');
//model je třída se kterou tvořím poté dokumenty

const userSchemaDB = new mongoose.Schema({
    userName: {type: 'string', required: true},
    userPassword: {type: 'string', required: true},
    booksOfUsers: [bookSchemaDB]
});

const User = mongoose.model('User', userSchemaDB, 'Users');

module.exports = {
    bookSchemaDB, Book,
    userSchemaDB, User
};