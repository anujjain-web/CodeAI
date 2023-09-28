const post = require('../models/post');

module.exports.Home = function(req , res){
    console.log(req.cookies);

    post.find({}).populate('user').then(post =>{
        return res.render('home', {
            title: "Home | code AI",
            posts : post
        });
    }).catch(error =>{
        console.log('error in fetching post in home controller');
    })
    
}