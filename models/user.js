const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
}); // akhane jodi amra username and password field ta na dei tahole o passport-local-mongoose plugin ta nijer moto username and password field create kore nibe and authentication er jonno use korbe. but ekhane ami explicitly username and password field ta diyechi jate code ta aro clear hoy.

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
