module.exports.Home = function(req , res){
    console.log(req.cookies);
    return res.render('home' , {
        title : "Home"
    });
}