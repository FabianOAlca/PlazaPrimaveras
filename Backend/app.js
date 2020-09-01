var express = require ('express')
var path = require ('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan') 
var passport = require ('passport')
require("dotenv").config();
require("./passport");



//Auth Router
const authRouter = require('./routes/auth')
//Locales Router
const localesRouter = require('./routes/locales')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth',authRouter);
app.use('/locales',localesRouter);


module.exports = app;
