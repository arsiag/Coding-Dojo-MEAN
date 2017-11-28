// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var AnswerSchema = new mongoose.Schema({
    username: String,
    answer: String,
    details: String,
    likes: Number,
	_question: {type: Schema.Types.ObjectId, ref:"Question"}
}, {timestamps: true})
// register the schema as a model
mongoose.model("Answer", AnswerSchema);
