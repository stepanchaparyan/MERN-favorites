const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');

//connet to mongoDB
const connectDB = require('./mongoConfig/mongoDB');
connectDB();

app.use(fileUpload());
app.use(express.json({ extended: true }));

// API routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/favItem', require('./routes/favItem'));
app.use('/profile', require('./routes/profile'));
app.use('/upload', require('./routes/upload'));

// use static files
app.use('/', express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
