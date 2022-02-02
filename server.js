if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const accommodationRoutes = require('./routes/accommodationRoutes');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

if (!db) {
  console.log('Error connecting to db');
} else {
  console.log('connected to db');
}

let port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('HELLOW FROM THE SERVER nodemon'));

app.listen(port, function () {
  console.log(`running server on port ${port}`);
});

app.use('/api', accommodationRoutes);
