// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  hobby: {
    type: String,
    required: [true, 'Hobby is required'],
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
