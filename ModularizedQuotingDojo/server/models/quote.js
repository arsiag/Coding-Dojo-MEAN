// require mongoose
var mongoose = require('mongoose');
// create the schema
var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4},
    quote: { type: String, required: true, minlength: 10}
}, {timestamps: true})
// register the schema as a model
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'Quote'
// var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'