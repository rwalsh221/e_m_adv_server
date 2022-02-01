const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  accommodationId: { type: String, required: true },
  accommodationName: { type: String, required: true },
  accommodationDescription: {
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
  },
  numGuests: { type: Number, required: true },
  numBedrooms: { type: Number, required: true },
  numBathrooms: { type: Number, required: true },
  accommodationLocation: {
    latlon: {
      lat: { type: Number, required: true },
      lon: { type: Number, required: true },
    },
    city: { type: String, required: true },
    accommodationType: { type: String, required: true },
    accommodationSetting: { type: String, required: true },
  },
  basePrice: { type: Number, required: true },
});

module.exports = mongoose.model('Accommodation', accommodationSchema);

// const get = func

// const get = (callback, limit) => {
//   AccommodationSchema.find(callback).limit(limit);
// };

// module.exports = function get(callback, limit) {
//   AccommodationSchema.find(callback).limit(limit);
// };

// module.exports = get;
