const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  username: { type: String, unique: false, required: true },
  password: { type: String, unique: false, required: true },
  email: { type: String, unique: true, required: true },
  frontEnd: { type: String, unique: false, required: true },
  backEnd: { type: String, unique: false, required: true },
  city: { type: String, lowercase: true, trim: true, unique: false, required: true },
  usState: { type: String, unique: false, required: false },
  latitude: { type: Number, unique: false, required: false },
  longitude: { type: Number, unique: false, required: false },
  github: { type: String, unique: false, required: false },
  image: { type: String, unique: false, required: false }
  // message: {type: String, unique: false, reuqired: false, dateTime}
});

// Define schema methods
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");

    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
