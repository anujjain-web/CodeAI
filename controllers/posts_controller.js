const Post = require('../models/post');

module.exports.add = function(req, res){

    return res.end('<h1>Add New Post </h1>');
}

module.exports.addPost = function (req, res) {
    
    Post.insertMany()
}

