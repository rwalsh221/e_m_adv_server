const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('accomodation', accommodationSchema);
