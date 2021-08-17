const mongoose = require('mongoose');
const {User} = require("../Schemas/mongooseSchema");

async function bookUpdate(req, res, query, user){
    await User.updateOne({"booksOfUsers._id": query.id},
            {
                "$set": {
                    'booksOfUsers.$':{
                        name: query.name,
                        author:query.author,
                        description:query.description
                    }
                }
            },(err,result) => {
                if (err) {return res.json({ERROR: err});}
                res.json({
                    UPDATE:"ok",
                    RESPONSE: result
                });
            }
    );
}

module.exports = {
    bookUpdate
}