const dev = {
  mongoDB_URI:
    'mongodb+srv://User1:User1@cluster0-rj0rl.mongodb.net/MERN-favorites?retryWrites=true&w=majority',
  JWT_SECRET: 'mySecret'
};

const prod = {
  // Add prod config here
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

module.exports = {
  // Add common config values here
  PORT: 5000,
  ...config
};
