const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");

async function bookUpdate(req, res, query){
    await Book.updateOne({_id: query.id},{
        $set: {
            name: query.name,
            author: query.author,
            description: query.description
        }
     },(err,result) => {
         if(err){return res.json({ERROR: err});}
         res.json({
            UPDATE:"ok",
            RESPONSE: result
        });
     });
}

module.exports = {
    bookUpdate
}