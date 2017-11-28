// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var QuestionSchema = new mongoose.Schema({
    question: String,
    description: String,
	_answers: [{type: Schema.Types.ObjectId, ref:"Answer"}]
}, {timestamps: true})
// register the schema as a model
mongoose.model("Question", QuestionSchema);
