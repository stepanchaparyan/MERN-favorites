const express = require('express');
const app = express();
const path = require('path');

const connectDB = require('./config/mongoDB');
//connet to mongoDB
connectDB();

app.use(express.json({ extended: true }));

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/favItem', require('./routes/favItem'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
