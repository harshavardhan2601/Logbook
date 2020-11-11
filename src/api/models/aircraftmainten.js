var mongoose = require("mongoose");
var Aircraftmainten = new mongoose.Schema({
    aircraft: String,
    regMark: String,
    auth_time: String,
    date: String,
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model("Aircraftmaintence", Aircraftmainten);