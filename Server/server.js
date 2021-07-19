const express = require('express');
const json = require('express').json();

const app = express();
const PORT = 3000;

////////////////////////////////////////////////////////////////
//MIDDLEWARE//
app.use(json);
app.use(express.urlencoded({ extended:true}));
////////////////////////////////////////////////////////////////
//ROUTE-CONTROLL//
const bookRoute = require('./Controller/books-controller');

app.use("/book", bookRoute);
////////////////////////////////////////////////////////////////

app.listen(PORT,()=>{
    console.log('Server běží na portu '+ PORT);
});