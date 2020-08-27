var passport = require("passport")
var passportJWT = require('passport-jwt')

var models = require('./db/db_config')
var localStrategy = require('passport-local').Strategy
var JWTStrategy = passportJWT.Strategy
var ExtractJWT = passportJWT.ExtractJwt

//login
passport.use(
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        (email, password, cb) => {
            return models.User.findOne(
                {where: {email,password}})
            .then((user)=>{
                return cb(null,user)})
                
            .catch((error)=>{
                return cb(error)})
            
        }
    )
)
//middleware to protect routes
passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        },
        (jwtPyaload, cb) => {
            return models.User.findByPk(jwtPyaload.id)
            .then((user)=>{
                return cb(null, user)
            })
            .catch((err)=>{
                return cb(err)
            })

        }
    )
)