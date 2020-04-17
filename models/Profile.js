const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  surname: {
    type: String
  },
  image: {
    type: String
  },
  gender: {
    type: String
  },
  birthDay: {
    type: Date
  },
  phone: {
    type: Number,
    unique: true
  }
});

module.exports = mongoose.model('profile', profileSchema);
