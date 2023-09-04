const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const database = require('./config/mongoose');
const User = require('./models/user');

// encrypted cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
// middlewares
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);

// setting up view engine .i.e, ejs
app.set('view engine', 'ejs');
app.set('views','./views');

// Using MongoStore for persistent storage of session-cookie
app.use(session({
    name : 'codeAI',
    secret : 'asfddfdcsad',
    saveUninitialized : false,
    resave : false,
    cookie :{
        maxAge : (1000 * 60 * 100 )  // in milliseconds
    },
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/codeAI_dev' }),
}));

//app.use(passport.initialize());  // Used in previous versions 
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Adding express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        // Using interpolation
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});