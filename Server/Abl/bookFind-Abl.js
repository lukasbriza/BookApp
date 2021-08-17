//DEPENDENCIES//
const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");
const {User} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function findBook(req, res, paramName, paramValue, user){
    const option = paramName;
    const value = paramValue;
    const name = user;

    const profile = await User.find({userName: name});
    let book;
    switch (option) {
        case "_id":
            book = await profile[0].booksOfUsers.find(book => book.id === value);
            break;
        case "name":
            book = await profile[0].booksOfUsers.find(book => book.name === value);
            break;
        case "author":
            book = await profile[0].booksOfUsers.find(book => book.author === value);
        break;
       
    }
    if(book){
        return res.json(book);
    } else {
        return res.status(400).send();
    }
}

module.exports = {
    findBook
};