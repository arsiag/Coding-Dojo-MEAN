var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
    show: function(req, res) {
        Quote.find().sort({ createdAt: -1 }).exec(function(err, quotes) {
            if(err) {
                console.log('something went wrong when retrieving');
            } else { 
                console.log('successfully retrieved all!');
                res.render("quotes", {quotes: quotes});
            }
        })
    },
    create: function (req, res){
        // console.log("POST DATA", req.body);
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err) {
            if(err) {
                console.log('something went wrong when saving');
                res.render('index', {errors: quote.errors})
            } else { 
                console.log('successfully added a quote!');
                res.redirect('/quotes');
            }
        })
    }
}