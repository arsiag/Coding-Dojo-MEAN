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
// setup port
var port = 8000;
// use bodu-parser
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./client/static")));
// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'ejs');
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
// tell the express app to listen on port 8000
app.listen(port, function() {
    console.log("listening on port", port);
});