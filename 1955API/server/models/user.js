// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
    name: String
}, {timestamps: true});

UserSchema.path('name').required(true, 'Be careful! user name cannot be blank');
UserSchema.path('name').minlength(4, 'Be careful! user name cannot be shorter than 4 chars');

mongoose.model('User', UserSchema); 
var User = mongoose.model('User') 