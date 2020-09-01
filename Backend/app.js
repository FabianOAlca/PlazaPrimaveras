var express = require ('express')
var path = require ('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan') 
var passport = require ('passport')
require("dotenv").config();
require("./passport");


//Users Router
const usersRouter = require ('./routes/users')
//Auth Router
const authRouter = require('./routes/auth')
//Locales Router
const localesRouter = require('./routes/locales')
//Create locales and edit
const createRouter = require('./routes/create')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth',authRouter);
app.use('/users', usersRouter);
app.use('/locales',localesRouter);
app.use('/create',createRouter);


module.exports = app;
