const mongoose = require("mongoose");

const validator = require('validator')
// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: 'Email address is required',
    unique: true,
  },
  
  password: {
    type: String,
    required: true,
    validate: {
      len: [8],
      validator: validator.isStrongPassword,
      message: 'Not a strong password: min 8 char, at least 1 lower and upper case letter, at least 1 number and symbol'
    },
  },

  date: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;


