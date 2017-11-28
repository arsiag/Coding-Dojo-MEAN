var polls = require('../controllers/polls.js');
var path = require('path');

module.exports = function(app) {
    app.get('/polls', function(req, res) {
        polls.index(req, res);
    })
    app.post('/polls', function (req, res) {
        polls.create(req, res);
    })
    app.get('/polls/search/:question', function(req, res) {
        polls.search(req, res);
    })

    app.get('/polls/:id', function(req, res) {
        polls.show(req, res);
    })

    app.delete('/polls/destroy/:id', function(req, res){
		polls.destroy(req, res);
    })
    
    app.post('/polls/:id/vote', function (req, res) {
        polls.updateVote(req, res);
    })
	
    app.all("*",function(req ,res) {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}