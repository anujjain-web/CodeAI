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
                console.log('Invalid Username/Password',err);
                return done(null, false);
            }
            return done(null, user);
        }).catch(err =>{
            console.log('error in finding user',err);
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

module.exports = passport;