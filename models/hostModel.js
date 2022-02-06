const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  hostName: { type: String, required: true },
  hostSince: { type: Number, required: true },
  aboutHost: { type: String, required: true },
  duringStay: { type: String, required: true },
  superHost: { type: Boolean, required: true },
  contactHost: {
    languages: { type: Array, required: true },
    responseTime: { type: { type: String, enum: ['hour', 'day'] } },
    alwaysAvalible: { type: Boolean, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
  },
});

module.exports = mongoose.model('Host', hostSchema);
