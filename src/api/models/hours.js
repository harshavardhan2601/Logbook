var mongoose = require('mongoose');
var HoursSchema = new mongoose.Schema({
    hr: Number,
});
mongoose.model('Hours', HoursSchema);