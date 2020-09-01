var express = require ('express')
var path = require ('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan') 
var passport = require ('passport')
require("dotenv").config();
require("./passport");


<<<<<<< HEAD

//Auth Router
const authRouter = require('./routes/auth')
//Locales Router
const localesRouter = require('./routes/locales')
=======
const localesRouter = require('./routes/locales')

>>>>>>> 147df584d4a29f22baddc3744b8ba80770dbcd7f

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.use('/auth',authRouter);
app.use('/locales',localesRouter);
=======

app.use('/locales',localesRouter);

>>>>>>> 147df584d4a29f22baddc3744b8ba80770dbcd7f


module.exports = app;
