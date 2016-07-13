
// ------------------- game plan ------------------
// GET '/' for main page with form to input your name and quote
// POST '/quotes' for the method of the form to make a new quote
// GET'/quotes' for all the quotes to be rendered
//-------------------- end plan -------------------

var express = require('express');
var path = require('path');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');

// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

// ************************ routing ****************************************

app.listen(8000, function() {

	console.log("listening on port 8000");

})

