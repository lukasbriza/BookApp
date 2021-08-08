const express = require('express');
const json = require('express').json();
const path = require('path');
const cors = require('cors'); // povolí CORS policy pro http requ
const settings = require('./Public/settings');

const app = express();
const PORT = process.env.PORT || settings.serverPort;

////////////////////////////////////////////////////////////////
//MIDDLEWARE//
app.use(json);
app.use(express.urlencoded({ extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname, './Public/build'))); //zpřístupnit build
////////////////////////////////////////////////////////////////
//ROUTE-CONTROLL//
const bookRoute = require('./Controller/books-controller');

app.use("/book", bookRoute);
////////////////////////////////////////////////////////////////
//DATABASE CONNECTION//
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true,useUnifiedTopology: true},
    ()=>{
    console.log("Database connected!");
});
////////////////////////////////////////////////////////////////
//publikování index html na volání basic route => "/"

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'Public','build','index.html'));
  });
////////////////////////////////////////////////////////////////
app.listen(PORT,()=>{
    console.log('Server běží na portu '+ PORT);
});