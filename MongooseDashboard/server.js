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
app.use(express.static(path.join(__dirname, "./static")));
// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

///////////////////////////////////////////////////////////////////////////////////////////////
// Create connection to database
const connection = mongoose.connect("mongodb://localhost/dog_db");

// Create dog schema and attach it as a model to our database
// const DogSchema = new mongoose.Schema({
//     name: { type: String, required: true, minlength: 4},
//     weight: { type: Number, required: true, min: 1, max: 100 },
//     color: { type: String, required: true, minlength: 3}
// }, {timestamps: true});

const DogSchema = new mongoose.Schema({
    name: String, 
    weight: Number, 
    color: String
}, {timestamps: true});

DogSchema.path('name').required(true, 'Be careful! Dog name cannot be blank');
DogSchema.path('name').minlength(4, 'Be careful! Dog name cannot be shorter than 4 chars');

DogSchema.path('weight').required(true, 'Be careful! Dog weigth cannot be blank');
DogSchema.path('weight').min(1, 'Be careful! Dog weigth cannot be less than 1');
DogSchema.path('weight').max(100, 'Be careful! Dog weigth cannot be more than 100');

DogSchema.path('color').required(true, 'Be careful! Dog color cannot be blank');
DogSchema.path('color').minlength(3, 'Be careful! Dog color cannot be shorter than 3 chars');


// Mongoose automatically looks for the plural version of your model name, 
// so a Dog model in Mongoose looks for 'dogs' in Mongo.
const Dog = mongoose.model('Dog', DogSchema);

///////////////////////////////////////////////////////////////////////////////////////////////
// root route to show all dogs
app.get('/', function(req, res) {
    Dog.find({}, function(err, results) {
        if(err) {
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside root something went wrong when retrieving all');
            // console.log("++++++++++++++++++++++++++++++++++")
        } else { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside root successfully retrieved all');
            // console.log(results);
            // for(let res of results){
            //     console.log(res._id);
            //     console.log(res.name);
            // }
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render("index", {dogs: results});
        }
    })
});

// New
app.get('/dogs/new', function(req, res){
    res.render('new');
});

// Create
app.post('/dogs', function(req, res){
    // console.log("POST DATA", req.body);
    // Create a new dog!
    var dog = new Dog(req.body);
    // var dog = new Dog({name: req.body.name, weight: req.body.weight, color: req.body.color});
    dog.save(function(err) {
    // Dog.create(req.body, function(err, result){
        if (err) { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside create something went wrong when saving');
            // console.log(err)
            // console.log(dog.errors); 
            // console.log(err.message)
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render('new', {errors: dog.errors});
        } else { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside create successfully saved');
            // console.log("++++++++++++++++++++++++++++++++++")
            res.redirect('/');
        }   
    });
});
// Show
app.get('/dogs/:id', function(req, res){
    Dog.find({_id: req.params.id}, function(err, results) {
        if(err) {
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside show something went wrong when retrieving with id ', req.params.id);
            // console.log(err);
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render("index", {errors: err});
        } else { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside show successfully retrieved with id ', req.params.id);
            // console.log(results);
            // for(let res of results){
            //     console.log(res._id);
            //     console.log(res.name);
            // }
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render('show', { dog: results[0] });
        }
    })
});
//Edit
app.get('/dogs/:id/edit', function(req, res){
    Dog.find({_id: req.params.id}, function(err, results) {
        if(err) {
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside edit something went wrong when retrieving with id ', req.params.id);
            // console.log(err);
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render("index", {errors: err});
        } else { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside edit successfully retrieved with id ', req.params.id);
            // console.log(results);
            // for(let res of results){
            //     console.log(res._id);
            //     console.log(res.name);
            // }
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render('edit', { dog: results[0] });
        }
    })
});
// Update
app.post('/dogs/:id', function(req, res){
    Dog.update({ _id: req.params.id }, req.body, function(err, results){
        if (err) { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside update something went wrong when updating with id ', req.params.id);
            // console.log(err);
            // console.log("++++++++++++++++++++++++++++++++++")
            res.render("edit", {errors: err});
             
        } else { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside update successfully updated with id ', req.params.id);
            // console.log("++++++++++++++++++++++++++++++++++")
            res.redirect('/');
        }   
    });
});
  
// Delete
app.post('/dogs/destroy/:id', function(req, res){
    Dog.remove({ _id: req.params.id }, function(err, results){
        if (err) { 
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside delete something went wrong when deleting with id ', req.params.id);
            // console.log(err);
            // console.log("++++++++++++++++++++++++++++++++++") 
        } else {
            // console.log("++++++++++++++++++++++++++++++++++")
            console.log('Inside delete successfully deleted with id ', req.params.id);
            // console.log("++++++++++++++++++++++++++++++++++")
            res.redirect('/');
        }  
    });
});

// tell the express app to listen on port 8000
app.listen(port, function() {
    console.log("listening on port", port);
});