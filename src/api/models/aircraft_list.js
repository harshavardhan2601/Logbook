var mongoose = require('mongoose');
var AircraftListSchema = new mongoose.Schema({
    aircraft_name: String,
    status: Number
});
mongoose.model('Aircraftlist', AircraftListSchema);