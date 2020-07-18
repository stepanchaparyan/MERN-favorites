const mongoose = require('mongoose');
const environment = require('../environment');

const Connect_DB = async () => {
  try {
    await mongoose.connect(environment.mongoDB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Connected to MongoDB successfuly...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = Connect_DB;
