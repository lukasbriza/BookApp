//DEPENDENCIES//
const express = require('express');
const router =express.Router();
////////////////////////////////////////////////////////////////
//ABL - import//
const {bookAdd} = require('../Abl/bookAdd-Abl');
const {bookRemove} = require('../Abl/bookRemove-Abl');
const {showAllBooks} = require('../Abl/showAllBooks-Abl');
const {findBook} = require('../Abl/bookFind-Abl');
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

router.get('/findId/:id', (req, res) =>{
    findBook(req, res, '_id', req.params.id);
})

router.get('/findName/:name', (req, res) =>{
    findBook(req, res, 'name', req.params.name);
})

router.get('/findAuthor/:author', (req, res) =>{
    findBook(req, res, 'author', req.params.author);
})
////////////////////////////////////////////////////////////////
module.exports = router;