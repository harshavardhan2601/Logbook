var mongoose = require('mongoose');
var dataSchema = mongoose.Schema({
    data1:String,
    data2:String
});

mongoose.model('NewData',dataSchema);