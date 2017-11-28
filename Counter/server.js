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
    if(req.session.count){
		req.session.count++;
	}
	else{
        req.session.count = 1;
    }
	res.render("index",{count: req.session.count});
})
app.get('/add2',function(req,res) {
	if(req.session.count){
		req.session.count++;
	}
	res.redirect('/');
})

app.get('/reset',function(req,res) {
	req.session.count = 0;
	res.redirect('/');
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});