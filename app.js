const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path');

// image upload
app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/src/assets/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/${file.name}` });
  });
});

//connet to mongoDB
const connectDB = require('./mongoConfig/mongoDB');
connectDB();

app.use(express.json({ extended: true }));

// API routes
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/favItem', require('./routes/favItem'));
app.use('/profile', require('./routes/profile'));

// use static files
app.use('/', express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
