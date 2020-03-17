const express = require('express');
const app = express();

const connectDB = require('./config/mongoDB');
//connet to mongoDB
connectDB();

app.use(express.json({ extended: true }));

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/favItem', require('./routes/favItem'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
