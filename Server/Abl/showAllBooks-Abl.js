//DEPENDENCIES//
const mongoose = require('mongoose');
const {User} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function showAllBooks(req, res, user){
    const userName = user;
    const userProfile = await User.find({"userName": userName});
    const bookArray = await userProfile[0].booksOfUsers;
    if (bookArray.length == 0){
        return res.json({books:null});
    } else {
        res.json(bookArray);
    }
}

module.exports = {
    showAllBooks
}