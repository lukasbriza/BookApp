//DEPENDENCIES//
const mongoose = require('mongoose');
const {User} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function getAllUsers(req,res){
    const users = await User.find({},'userName');
    res.json(users);
}

module.exports ={getAllUsers};