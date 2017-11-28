var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');

module.exports = {
    index: function(req, res) {
        Dog.find({}, function(err, results) {
            if(err) {
                console.log('Inside root something went wrong when retrieving all');
            } else { 
                console.log('Inside root successfully retrieved all');
                res.render("index", {dogs: results});
            }
        })
    },
    new: function(req, res) {
        res.render('new');
    },
    create: function(req, res){
        // console.log("POST DATA", req.body);
        var dog = new Dog(req.body);
        dog.save(function(err) {
            if (err) { 
                console.log('Inside create something went wrong when saving');
                res.render('new', {errors: dog.errors});
            } else { 
                console.log('Inside create successfully saved');
                res.redirect('/');
            }   
        })
    },
    show: function(req, res){
        Dog.find({_id: req.params.id}, function(err, results) {
            if(err) {
                console.log('Inside show something went wrong when retrieving with id ', req.params.id);
                res.render("index", {errors: err});
            } else { 
                console.log('Inside show successfully retrieved with id ', req.params.id);
                res.render('show', { dog: results[0] });
            }
        })
    },
    edit: function(req, res){
        Dog.find({_id: req.params.id}, function(err, results) {
            if(err) {
                console.log('Inside edit something went wrong when retrieving with id ', req.params.id);
                res.render("index", {errors: err});
            } else { 
                console.log('Inside edit successfully retrieved with id ', req.params.id);
                res.render('edit', { dog: results[0] });
            }
        })
    },
    update: function(req, res){
        // console.log("POST DATA", req.body);
        Dog.update({ _id: req.params.id }, req.body, function(err, results){
            if (err) { 
                console.log('Inside update something went wrong when updating with id ', req.params.id);
                res.render("edit", {errors: err});
                 
            } else { 
                console.log('Inside update successfully updated with id ', req.params.id);
                res.redirect('/');
            }   
        })
    },
    destroy: function(req, res){
        // console.log("POST DATA", req.body);
        Dog.remove({ _id: req.params.id }, function(err, results){
            if (err) { 
                console.log('Inside delete something went wrong when deleting with id ', req.params.id);
            } else {
                console.log('Inside delete successfully deleted with id ', req.params.id);
                res.redirect('/');
            }  
        });
    }
}