// require express
var express = require("express");
// require path 
var path = require("path");
// require express-session
var session = require('express-session');
// require body-parser
var bodyParser = require('body-parser');

// create the express app
var app = express();

// use bodu-parser
app.use(bodyParser.urlencoded({ extended: true }));
// use session
app.use(session({secret: 'counter'}));  // string for encryption

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
	res.render("index");
})
app.get('/result', function(req, res) {
	res.render("result", {user: req.session.user});
})
app.post('/result', function (req, res){
    // set the name property of session. 
    req.session.user = req.body; 
    res.redirect('/result');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});