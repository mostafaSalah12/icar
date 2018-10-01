var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    var LocalStrategy = require('passport-local').Strategy;
    var passport = require('passport');
// load up the user model
var User = require('../models/user');
var config = require('../config/auth-config'); // get db config file


var localOptions = {
    usernameField: 'email'
};


//locale login

var localLogin = new LocalStrategy(localOptions, function(email, password, done){
 
    User.findOne({
        email: email
    }, function(err, user){
 
        if(err){
            return done(err);
        }
 
        if(!user){
            return done(null, false, {error: 'Login failed. Please try again.'});
        }
 
        user.comparePassword(password, function(err, isMatch){
 
            if(err){
                return done(err);
            }
 
            if(!isMatch){
                return done(null, false, {error: 'Login failed. Please try again.'});
            }
            return done(null, user);
 
        });
 
    });
 
});


var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: config.secret
};



var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
 
    User.findById(payload.id, function(err, user){
 
        if(err){
            return done(err, false);
        }
 
        if(user){
            done(null, user);
        } else {
            done(null, false);
        }
 
    });
 
});

passport.use(jwtLogin);
passport.use(localLogin);
