const mongoose = require('mongoose')

const favItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  author: {
    type: String,
    default: 'Unknown'
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('favItem', favItemSchema)