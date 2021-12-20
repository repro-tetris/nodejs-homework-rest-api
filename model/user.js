const { Schema, model } = require("mongoose");
const { nanoid } = require("nanoid");
const bcrypt = require("bcryptjs");
var gravatar = require("gravatar");

const userSchema = Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    default: null,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
});

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.createAvatar = function () {
  this.avatarURL = gravatar.url(this.email);
};

userSchema.methods.createVerificationToken = function () {
  this.verifyToken = nanoid();
  return this.verifyToken;
};
const User = model("user", userSchema);

module.exports = User;
