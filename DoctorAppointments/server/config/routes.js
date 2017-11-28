var appointments = require('../controllers/appointments.js');
var path = require('path');

module.exports = function(app) {
    app.get('/appointments', function(req, res) {
        appointments.findAll(req, res);
    })
    app.get('/appointments/search/:patient', function(req, res) {
        appointments.search(req, res);
    })

    app.post('/appointments', function (req, res) {
        appointments.create(req, res);
    })
    app.delete('/appointments/destroy/:id', function(req, res){
		appointments.destroy(req, res);
	})
	
    app.all("*",function(req ,res) {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}