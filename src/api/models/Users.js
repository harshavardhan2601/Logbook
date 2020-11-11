var mongoose = require("mongoose");
//-var crypto = require("crypto");

var NewUsersSchema = new mongoose.Schema({
  email: String,
  password: String,
  role_id: Number
});
/*
NewUsersSchema.methods.validPassword = function(pwd) {
  var passwordUser = encrypt(pwd);
  return this.password === passwordUser;
};

function encrypt(data) {
  var cipher = crypto.createCipher("aes-256-ecb", "flytechSecretCode$$");
  return cipher.update(data, "utf8", "hex") + cipher.final("hex");
}*/
mongoose.model("Users", NewUsersSchema);
