//DEPENDENCIES//
const express = require('express');
const router =express.Router();
////////////////////////////////////////////////////////////////
//ABL - import//
const {bookAdd} = require('../Abl/bookAdd-Abl');
const {bookRemove} = require('../Abl/bookRemove-Abl');
const {showAllBooks} = require('../Abl/showAllBooks-Abl');
////////////////////////////////////////////////////////////////
//SCHEMA TEMPLATE - import//
const bookSchema = require("../Schemas/book-schema");
////////////////////////////////////////////////////////////////
//ROUTES//
router.post('/add', (req, res) => {
    bookAdd(req, res, bookSchema);
});

router.post('/remove/:id', (req, res) =>{
    bookRemove(req, res, req.params.id);
})

router.get('/all', (req, res) =>{
    showAllBooks(req, res);
})

router.get('/find/:id', (req, res) =>{
    findBook(req, res, req.params.id);
})

module.exports = router;