const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");

async function bookUpdate(req, res, query){
    const updateBook = await Book.updateOne({_id: query.id},{
        $set: {
            name: query.name,
            author: query.author,
            description: query.description
        }
     },(err,result) => {
         if(err){return res.send(err);}
         res.send("n: "+result.n+", ok: "+result.ok);
     });
}

module.exports = {
    bookUpdate
}