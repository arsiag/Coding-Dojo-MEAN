var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');
var path = require('path');

module.exports = function(app) {
    app.get('/questions', function(req, res) {
        questions.findAll(req, res);
    })
    app.get('/questions/search/:term', function(req, res) {
        questions.search(req, res);
    })

    app.get('/questions/:id/answers', function(req, res) {
        questions.findAllAnswers(req, res);
    })
    app.post('/questions', function (req, res) {
        questions.create(req, res);
    })

    app.post('/questions/:id/answers', function (req, res) {
        answers.create(req, res);
    })

    app.post('/answers/:id/like', function (req, res) {
        answers.updateLike(req, res);
    })
	
    app.all("*",function(req ,res) {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}