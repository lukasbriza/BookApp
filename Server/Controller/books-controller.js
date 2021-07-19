//DEPENDENCIES//;
const express = require('express');
const router =express.Router();
////////////////////////////////////////////////////////////////
//ABL - import//
const {bookAdd} = require('../Abl/bookAdd-Abl');
////////////////////////////////////////////////////////////////
//SCHEMA TEMPLATE - import//
const bookSchema = require("../Schemas/book-schema");
////////////////////////////////////////////////////////////////
//ROUTES//
router.post('/add', (req, res) => {
    bookAdd(req, res, bookSchema);
});

module.exports = router;