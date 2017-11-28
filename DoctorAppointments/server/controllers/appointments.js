var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports = {
    findAll: function(req, res) {
        Appointment.find({}).sort({ date: 1 }).exec(function(err, appointments) {
            if(err) {
                console.log('In (appoinments.findAll - something went wrong when retrieving all');
            } else { 
                console.log('In (appoinments.findAll - successfully retrieved all!');
                res.json(appointments);
            }
        })
    },
    search: function(req, res) {
        // console.log("POST DATA", req.params);
        Appointment.find({patient: new RegExp(req.params.patient,'i')}).exec(function(err, appointments) {
            if(err) {
                console.log('In appoinments.search - something went wrong when searching');
            } else { 
                console.log('In appoinments.search - successfully searched!');
                res.json(appointments);
            }
        })
    },
    create: function (req, res) {
        // console.log("POST DATA", req.body);
        var appointment = new Appointment(req.body);
        appointment.save(function(err) {
            if(err) {
                console.log('In appoinments.create - something went wrong when saving');
            } else { 
                console.log('In appoinments.create- successfully added an appoinment!');
                res.json('success');
            }
        })
    },
    destroy: function(req, res) {
        // console.log("POST DATA", req.params);
        Appointment.remove({_id: req.params.id}, function(err, results) {
            if(err) {
                console.log('In appoinments.destroy - something went wrong when deleting');
            } else {
                console.log('In appoinments.destroy - successfully deleted an appoinment!');
                res.json('success');
                // res.redirect('/list-appointments');
            }
        })
    }
    
}