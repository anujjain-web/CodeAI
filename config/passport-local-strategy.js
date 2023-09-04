const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// auth using passport
passport.use(new LocalStrategy({
    usernameField : 'email'
},
    function(email, password, done){
        User.findOne({email: email}).then(user =>{

            if(!user || user.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }
            return done(null, user);
        }).catch(err =>{
            console.log('error in finding user --> passport',err);
            return done(err);
        });
    }
));

passport.serializeUser(function(user , done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id).then(user =>{
        return done(null , user);
    }).catch(err =>{
        console.log('error in finding user',err);
        return done(err);
    });
});

// to render views to the authenticated/logged_in user
passport.checkAuthentication = function(req , res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;