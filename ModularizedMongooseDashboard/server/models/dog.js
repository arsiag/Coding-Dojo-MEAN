// require mongoose
var mongoose = require('mongoose');
// create the schema
var DogSchema = new mongoose.Schema({
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
mongoose.model('Dog', DogSchema); 
var Dog = mongoose.model('Dog') 