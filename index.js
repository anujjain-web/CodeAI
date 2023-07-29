const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const database = require('./config/mongoose');

app.use(express.static('./assets'));
app.use(expressLayouts);
// Adding express router
app.use('/',require('./routes'));


// setting up view engine .i.e, ejs
app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port, function(err){
    if(err){
        // Using interpolation
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});