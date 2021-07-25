const express = require('express');
const json = require('express').json();
const path = require('path');
const cors = require('cors'); // povolí CORS policy pro http requ
const settings = require('./Public/settings');

const app = express();
const PORT = settings.serverPort;

////////////////////////////////////////////////////////////////
//MIDDLEWARE//
app.use(json);
app.use(express.urlencoded({ extended:true}));
app.use(cors());
app.use("/public/", express.static(path.join(__dirname, "public"))); //zpřístupnění složky public přes url 
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
app.listen(PORT,()=>{
    console.log('Server běží na portu '+ PORT);
});