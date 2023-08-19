const User = require('../models/user');

module.exports.Profile = function(req ,res){
    return res.render('user_profile', {
        title : "User Profile"
    });
}

module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: "Sign Up"
    });
}

module.exports.signIn = function (req, res) {
    return res.render('user_sign_in', {
        title: "Sign In"
    });
}

module.exports.create = function(req , res){
   if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
   }
   User.findOne({email: req.body.email}).then(user =>{
    console.log('entered here')
       if (!user) {
        console.log(req.body);
           User.create(req.body).then(user=> {
               return res.redirect('/users/signIn');
            }).catch(err =>{
                console.log('error in creating user',err);
                return res.redirect('back');
            });
        } else {
           return res.redirect('back');
        }
   }).catch(error => {
       console.error('error in finding email in signup form'+error);
       return res.redirect('back');
   });
}

module.exports.createSession = function(req , res){
    // Todo
}