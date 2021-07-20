//DEPENDENCIES//
const mongoose = require('mongoose');
const {Book} = require("../Schemas/mongooseSchema");
////////////////////////////////////////////////////////////////
//FUNCTIONS//
async function bookRemove(req, res, id){
    await Book.remove({_id: id}, (err)=>{
        if (err) {return res.send({err})}
        res.send("Vymazání proběhlo úspěšně.\n Bylo vymazáno záznamů: "+ res.deletedCount);
    });
}

module.exports = {
    bookRemove
}