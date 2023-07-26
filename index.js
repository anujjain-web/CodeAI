const express = require('express');
const app = express();
const port = 8000;
// Adding express router
app.use('/',require('./routes'))

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