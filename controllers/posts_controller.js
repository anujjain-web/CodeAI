const Post = require('../models/post');

module.exports.add = function(req, res){
    return res.end('<h1>Add New Post </h1>');
}

module.exports.create = function (req, res) {
    Post.create({
        content : req.body.content,
        user : req.user._id
    }).then(result =>{
        return res.redirect('back');
    }).catch(error =>{
        console.log('Error in creating a post',error);
        return;
    });
}

