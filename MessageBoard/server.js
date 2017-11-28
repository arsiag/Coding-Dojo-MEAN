// Dependencies
const express = require('express'), // require express
        bodyParser = require('body-parser'), // require body-parser
        mongoose = require('mongoose'), // require mongoose
        path = require('path'), // require path
        session = require('express-session'), // require express-session
        port = 8000;

///////////////////////////////////////////////////////////////////////////////////////////////
// Create express app
const app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));
// use session
app.use(session({secret: 'MongooseDashboard'}));  // string for encryption

// static content
app.use(express.static(path.join(__dirname, "./views")));
// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

///////////////////////////////////////////////////////////////////////////////////////////////
// Create connection to database
const connection = mongoose.connect("mongodb://localhost/msg_board_db");

// define Schema variable
var Schema = mongoose.Schema;
// define Message Schema
var MessageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4},
    message: {type: String, required: true }, 
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: { type: String, required: true, minlength: 4},
    comment: {type: String, required: true }
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

///////////////////////////////////////////////////////////////////////////////////////////////
// root route to show all dogs
// route for getting all messages and comments
app.get('/', function (req, res){
    Message.find({})
    .populate('comments')
    .exec(function(err, messages) {
        if(err) {
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside root something went wrong when retrieving all');
            // console.log(err);
            // console.log("++++++++++++++++++++++++++++++++++")
        } else { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside root successfully retrieved all');
            // console.log(messages);
            // for(let res of results){
            //     console.log(res._id);
            //     console.log(res.name);
            // }
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render('index', {msgs: messages});
        }     
    });
});
// Create new message
app.post('/messages', function(req, res){
    // console.log("POST DATA", req.body);
    var message = new Message(req.body);
    message.save(function(err1) {
        if (err1) { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside create message something went wrong when saving');
            // console.log(err)
            // console.log(dog.errors); 
            // console.log(message.errors.message)
            // console.log("++++++++++++++++++++++++++++++++++")
            // res.redirect('/');
            Message.find({})
            .populate('comments')
            .exec(function(err2, messages) {
                if (err2) {
                    console.log("This is very very bad!")
                }
                else {
                    res.render('index', {msgs: messages, errors: message.errors});
                }
            });
        } else { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside create message successfully saved');
            // console.log("++++++++++++++++++++++++++++++++++")
            res.redirect('/');
        }   
    });
});
// Create a comment for a message with :id
app.post('/messages/:id', function (req, res){
    // console.log("POST DATA", req.body);
    Message.findOne({_id: req.params.id}, function(err, message){
        var comment = new Comment(req.body);
        comment._message = message._id;
        message.comments.push(comment);
        comment.save(function(err1){
            if (err1) {
                // console.log("++++++++++++++++++++++++++++++++++")
                console.log('Inside create comment something went wrong when saving comment');
                // console.log(err)
                // console.log(dog.errors); 
                // console.log(err.message)
                // console.log("++++++++++++++++++++++++++++++++++")
                Message.find({})
                .populate('comments')
                .exec(function(err2, messages) {
                    if (err2) {
                        console.log("This is very very bad!")
                    }
                    else {
                        res.render('index', {msgs: messages, errors: comment.errors});
                    }
                });
            } else {
                message.save(function(err3){
                    if(err3) { 
                        // console.log("++++++++++++++++++++++++++++++++++")
                        console.log('Inside create comment something went wrong when saving message');
                        // console.log(err)
                        // console.log(dog.errors); 
                        // console.log(err.message)
                        // console.log("++++++++++++++++++++++++++++++++++")
                        Message.find({})
                        .populate('comments')
                        .exec(function(err4, messages) {
                            if (err4) {
                                console.log("This is very very bad!")
                            }
                            else {
                                res.render('index', {msgs: messages, errors: message.errors});
                            }
                        });
                    } else { 
                        // console.log("++++++++++++++++++++++++++++++++++")
                        console.log('Inside create comment successfully saved');
                        // console.log("++++++++++++++++++++++++++++++++++")
                        res.redirect('/'); 
                    }
                });
            };
        });
    });
});

// tell the express app to listen on port 8000
app.listen(port, function() {
    console.log("listening on port", port);
});