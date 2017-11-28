// require express
var express = require("express");
// create the express app
var app = express();
// require path
var path = require("path");
// require express-session
var session = require('express-session');
// require body-parser
var bodyParser = require('body-parser');
// require mongoose
var mongoose = require('mongoose');
// use bodu-parser
app.use(bodyParser.urlencoded({ extended: true }));
// use session
app.use(session({secret: 'QuotingDojo'}));  // string for encryption
// static content
app.use(express.static(path.join(__dirname, './client/static')));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});