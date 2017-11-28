var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, results) {
            if(err) {
                console.log('Inside root something went wrong when retrieving all');
            } else { 
                console.log('Inside root successfully retrieved all');
                res.json(results);
            }
        })
    },
    new: function(req, res){
        var user = new User({name: req.params.name});
        user.save(function(err) {
            if (err) { 
                console.log('Inside create something went wrong when saving');
            } else { 
                console.log('Inside create successfully saved');
                res.redirect('/');
            }   
        })
    },
    show: function(req, res){
        User.findOne({name: req.params.name}, function(err, results) {
            if(err) {
                console.log('Inside show something went wrong when retrieving with name ', req.params.name);
            } else { 
                console.log('Inside show successfully retrieved with name ', req.params.name);
                res.json(results);
            }
        })
    },
    destroy: function(req, res){
        User.remove({name: req.params.name}, function(err, results){
            if (err) { 
                console.log('Inside delete something went wrong when deleting with name ', req.params.name);
            } else {
                console.log('Inside delete successfully deleted with name ', req.params.name);
                res.redirect('/');
            }  
        });
    }
}