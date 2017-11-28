// require mongoose
var mongoose = require('mongoose');
// create the schema
var NoteSchema = new mongoose.Schema({
    note: { type: String, required: true, minlength: 3}
}, {timestamps: true})
// register the schema as a model
mongoose.model('Note', NoteSchema); 
// var Note = mongoose.model('Note') 