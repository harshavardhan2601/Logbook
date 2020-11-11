var mongoose = require('mongoose');
var NewLocationSchema = new mongoose.Schema({
  locations: String,
  status:Number
});
mongoose.model('NewLocation', NewLocationSchema);