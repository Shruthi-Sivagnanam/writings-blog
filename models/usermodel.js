const mongoose = require("mongoose");
const passportMongooseLocal = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
});
userSchema.plugin(passportMongooseLocal);
module.exports = mongoose.model("users", userSchema);
