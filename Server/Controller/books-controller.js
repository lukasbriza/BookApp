//DEPENDENCIES//
const express = require('express');
const router =express.Router();
////////////////////////////////////////////////////////////////
//ABL - import//
const {bookAdd} = require('../Abl/bookAdd-Abl');
const {bookRemove} = require('../Abl/bookRemove-Abl');
const {showAllBooks} = require('../Abl/showAllBooks-Abl');
const {findBook} = require('../Abl/bookFind-Abl');
const {bookUpdate} = require('../Abl/bookUpdate-Abl');
const {registerUser} = require('../Abl/registerUser-Abl');
////////////////////////////////////////////////////////////////
//SCHEMA TEMPLATE - import//
const {bookSchema} = require("../Schemas/book-schema");
const {userSchema} = require("../Schemas/book-schema");
////////////////////////////////////////////////////////////////
//ROUTES//
router.post('/add/:user', (req, res) => {
    bookAdd(req, res, bookSchema, req.params.user);
});

router.post('/remove/:id', (req, res) =>{
    bookRemove(req, res, req.params.id);
})

router.post('/update', (req, res)=>{
    bookUpdate(req, res, req.query, req.query.user);
})

router.get('/all', (req, res) =>{
    showAllBooks(req, res);
})

router.get('/findId/:id/:user', (req, res) =>{
    findBook(req, res, '_id', req.params.id, req.params.user);
})

router.get('/findName/:name/:user', (req, res) =>{
    findBook(req, res, 'name', req.params.name, req.params.user);
})

router.get('/findAuthor/:author/:user', (req, res) =>{
    findBook(req, res, 'author', req.params.author, req.params.user);
})

router.post('/register', (req, res)=>{
    registerUser(req, res, userSchema);
})
////////////////////////////////////////////////////////////////
module.exports = router;