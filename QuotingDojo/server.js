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

// This is how we connect to the mongodb database using mongoose -- "quotes_db" is the name of
// our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quotes_db');

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4},
    quote: { type: String, required: true, minlength: 10}
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'

// use bodu-parser
app.use(bodyParser.urlencoded({ extended: true }));
// use session
app.use(session({secret: 'QuotingDojo'}));  // string for encryption

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
	res.render("index");
})

app.get('/quotes', function(req, res) {
    Quote.find().sort({ createdAt: -1 }).exec(function(err, quotes) {
        if(err) {
            console.log('something went wrong when retrieving');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully retrieved all quotes!');
            // console.log("++++++++++++++++++++++++++++++++++")
            // console.log(quotes);
            // for(let quote of quotes){
            //     console.log(quote._id);
            //     console.log(quote.name);
            //     console.log(quote.createdAt);
            // }
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render("quotes", {quotes: quotes});
        }
    });
    // Quote.find({}, function(err, quotes) {
    //     if(err) {
    //         console.log('something went wrong when retrieving');
    //     } else { // else console.log that we did well and then redirect to the root route
    //         console.log('successfully retrieved all quotes!');
    //         console.log("++++++++++++++++++++++++++++++++++")
    //         console.log(quotes);
    //         // for(let quote of quotes){
    //         //     console.log(quote._id);
    //         //     console.log(quote.name);
    //         //     console.log(quote.age);
    //         // }
    //         console.log("++++++++++++++++++++++++++++++++++")
    //         res.render("quotes", {quotes: quotes});
    //     }
    // })
	
})

app.post('/quotes', function (req, res){
    console.log("POST DATA", req.body);
    // create a new Quote with the name and age corresponding to those from req.body
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    quote.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            // console.log("++++++++++++++++++++++++++++++++++")
            // console.log('something went wrong when saving');
            // console.log(quote.errors);
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render('index', {errors: quote.errors})
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a quote!');
            res.redirect('/quotes');
        }
    })
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});