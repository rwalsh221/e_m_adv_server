const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const AccommodationSchema = (module.exports = mongoose.model(
  'accommodation',
  accommodationSchema
));

module.exports.get = function (callback, limit) {
  AccommodationSchema.find(callback).limit(limit);
};
