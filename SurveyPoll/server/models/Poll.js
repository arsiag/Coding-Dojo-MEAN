// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var PollSchema = new mongoose.Schema({
    author: String,
    question: String,
    options: []
}, {timestamps: true})
// register the schema as a model
mongoose.model("Poll", PollSchema);