var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    index: function(req, res) {
        Note.find().sort({ createdAt: -1 }).exec(function(err, notes) {
            if(err) {
                console.log('something went wrong when retrieving');
            } else { 
                console.log('successfully retrieved all!');
                res.json(notes);
            }
        })
    },
    create: function (req, res){
        // console.log("POST DATA", req.body);
        var note = new Note({note: req.body.note});
        note.save(function(err) {
            if(err) {
                console.log('something went wrong when saving');
                // console.log('Inside create: ', err)
            } else { 
                console.log('successfully added a quote!');
                res.redirect('/notes');
            }
        })
    }
}