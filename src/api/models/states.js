var mongoose = require('mongoose');
var StatesSchema = new mongoose.Schema({
    state_name: String,
    //-state_code: String,
    status: Number
});
mongoose.model('States', StatesSchema);