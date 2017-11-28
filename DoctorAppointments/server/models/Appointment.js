// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var AppointmentSchema = new mongoose.Schema({
    patient: String, 
    date: String,
    time: String,
    complain: String
}, {timestamps: true})
// register the schema as a model
mongoose.model("Appointment", AppointmentSchema);