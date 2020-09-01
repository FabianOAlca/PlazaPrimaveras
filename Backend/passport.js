var passport = require("passport")
var passportJWT = require('passport-jwt')

<<<<<<< HEAD
var db = require('./db/db_config')
=======
>>>>>>> 147df584d4a29f22baddc3744b8ba80770dbcd7f
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
            return db.User.findOne(
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
            return db.User.findByPk(jwtPyaload.id)
            .then((user)=>{
                return cb(null, user)
            })
            .catch((err)=>{
                return cb(err)
            })

        }
    )
)