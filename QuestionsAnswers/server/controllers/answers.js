var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
    create: function (req, res) {
        // console.log("POST DATA", req.body);
        Question.findOne({_id: req.params.id}, function(err, question){
            if (err) {
                console.log('In answers.create - something went wrong when retireving question');
            } else {
                var answer = new Answer(req.body);
                answer._question = question._id;
                answer.likes = 0;
                question._answers.push(answer);
                answer.save(function(err1){
                    if (err1) {
                        console.log('In answers.create - something went wrong when saving answer');
                    } else {
                        question.save(function(err2){
                            if(err2) { 
                                console.log('In answers.create - something went wrong when saving question');
                            } else { 
                                console.log('In answers.create - successfully added an answer!');
                                res.json('Answer success');
                            }
                        });
                    };
                });
            };
        });
    },
    updateLike: function(req, res) {
        // console.log("POST DATA", req.body);
        Answer.findOne({_id: req.params.id}, function(err, answer) {
			if(err){
                console.log('In answers.updateLike - something went wrong when getting an answer');
				// console.log(err);
			} else {
                answer.likes += 1;
                answer.save(function(err1){
                    if(err1){
                        console.log('In answers.updateLike - something went wrong when saving');
                    } else {
                        console.log('In answers.updateLike - successfully updated like for an answer');
                        // res.json('Answer success');
                        res.redirect('/questions/'+ answer._question + '/answers');
                    }    
                });
			};
		});
    }
}