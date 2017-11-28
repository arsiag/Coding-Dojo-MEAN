var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
    findAll: function(req, res) {
        Question.find({}).sort({ createdAt: -1 }).exec(function(err, questions) {
            if(err) {
                console.log('In questions.findAll - something went wrong when retrieving all');
            } else { 
                console.log('In questions.findAll - successfully retrieved all!');
                res.json(questions);
            }
        })
    },
    search: function(req, res) {
        Question.find({question: new RegExp(req.params.term,'i')}).exec(function(err, questions) {
            if(err) {
                console.log('In questions.search - something went wrong when searching');
            } else { 
                console.log('In questions.search - successfully searched!');
                res.json(questions);
            }
        })
    },
    create: function (req, res) {
        // console.log("POST DATA", req.body);
        var question = new Question({question: req.body.question, description: req.body.description});
        question.save(function(err) {
            if(err) {
                console.log('In questions.create - something went wrong when saving');
            } else { 
                console.log('In questions.create- successfully added a question!');
                res.json("success");
            }
        })
    },
    findAllAnswers: function(req, res) {
        Question.findOne({_id: req.params.id}).populate('_answers').exec(function(err, question) {
			if(err){
                console.log('In questions.findAllAnswers - something went wrong when getting a question');
			} else {
                console.log('In questions.findAllAnswers - successfully got a question');
				question._answers.sort(function(a,b) {return b.likes - a.likes} );
				res.json(question);
			}
		})

    },
}