var mongoose = require('mongoose');
var SunsetSchema = new mongoose.Schema({
    sunset_hr: String,
    sunset_min: String,
    status: Number,
    created_date: { type: Date},
});
mongoose.model('Sunset', SunsetSchema);