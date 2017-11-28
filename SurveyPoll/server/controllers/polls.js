var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {
    index: function(req, res){
        Poll.find({}).sort({ createAt: 1 }).exec(function(err, polls) {
            if(err) {
                console.log('In polls.index - something went wrong when retrieving all');
            } else { 
                console.log('In Poll.index - successfully retrieved all!');
                res.json(polls);
            }
        })
    },
    ////////////////////////////////////////////////////////////
    create: function (req, res) {
        // console.log("POST DATA", req.body);
        var poll = new Poll({question: req.body.question, author: req.body.author, options: req.body.options });
        poll.save(function(err) {
            if(err) {
                console.log('In polls.create - something went wrong when saving');
            } else { 
                console.log('In polls.create- successfully added a poll!');
                res.json('success');
            }
        })
    },
    ////////////////////////////////////////////////////////////
    search: function(req, res) {
        // console.log("POST DATA", req.params);
        Poll.find({question: new RegExp(req.params.question,'i')}).exec(function(err, polls) {
            if(err) {
                console.log('In polls.search - something went wrong when searching');
            } else { 
                console.log('In pollss.search - successfully searched!');
                res.json(polls);
            }
        })
    },
    //////////////////////////////////////////////////
    show: function(req, res){
        // console.log("POST DATA", req.params);
        Poll.findById(req.params.id, function(err, poll){
            if(err){
                console.log('In polls.show - something went wrong when finding one');
                res.json(err)
            }
            else{
                console.log('In polls.show - successfully found one');
                res.json(poll);
            }
        })
    },
    //////////////////////////////////////////////////
    updateVote: function(req, res){
        // console.log("POST DATA", req.body);
        Poll.update({_id: req.params.id}, {options: req.body}, function(err, poll){
             if(err){
                console.log('In polls.updateVote - something went wrong when updating');
            }
            else{
                console.log('In polls.updateVote - successfully updated a poll!');
                res.json(poll);
                }
            }
        );
    },
    //////////////////////////////////////////////////////
    destroy: function(req, res) {
        // console.log("POST DATA", req.params);
        Poll.remove({_id: req.params.id}, function(err, results) {
            if(err) {
                console.log('In pollss.destroy - something went wrong when deleting');
            } else {
                console.log('In polls.destroy - successfully deleted a poll!');
                res.json(results);
                // res.redirect('/polls/'+ req.params.id);
            }
        })
    }
    
}