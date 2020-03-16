require('dotenv').config()
const mongoose = require('mongoose')
const dbURL = process.env.mongoDB_URI

const Connect_DB = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('Connected to MongoDB successfuly...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = Connect_DB