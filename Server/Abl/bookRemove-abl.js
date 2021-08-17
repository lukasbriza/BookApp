//DEPENDENCIES//
const mongoose = require('mongoose');
const {User} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function bookRemove(req, res, id, user){    
    const userName = user;
    await User.updateOne({userName: userName},
        {
            $pull: {'booksOfUsers': {"_id": id}} //pull => which array => targeting document in array
        },
        (err,result)=>{
            if (err){return res.json({ERROR: err})}
            res.json(result);
    });
}

module.exports = {
    bookRemove
}