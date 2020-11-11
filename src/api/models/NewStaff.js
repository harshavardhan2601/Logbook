var mongoose = require("mongoose");
var StaffSchema = new mongoose.Schema({
  role_id: Number,
  staff_type: String,
  firstName: String,
  middleName: String,
  lastName: String,
  NickName: String,
  gender: String,
  doB: String,
  file_attach1: String,
  phoneNumber: String,
  email: String,
  password: String,
  permaAdrr: String,
  permaCity: String,
  staffstateCurrent: String,
  permaPostalCode: String,
  attachFile: String,
  language: String,
  english_level_type: String,
  english_level_date: String,
  stffSignature:String,
  ticket_id: String,
  terms: String,
  status: Number,
  create_date: {
    type: Date,
    default: Date.now
  },
  modify_date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("NewStaff", StaffSchema);
