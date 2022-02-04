const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  aboutHost: {
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
  },
  accommodationDescription: {
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    features: { type: Array, required: true },
    sharedAccommodation: { type: Boolean, required: true },
    starAmenity: { type: String, required: true },
  },
  accommodationId: { type: String, required: true },
  accommodationLocation: {
    latlon: {
      lat: { type: Number, required: true },
      lon: { type: Number, required: true },
    },
    city: { type: String, required: true },
    country: { type: String, required: true },
    accommodationType: { type: String, required: true },
    accommodationSetting: { type: String, required: true },
    locationDescription: { type: String, required: true },
  },
  accommodationName: { type: String, required: true },
  basePrice: { type: Number, required: true },
  occupancy: {
    numBathrooms: { type: Number, required: true },
    numGuests: { type: Number, required: true },
    bedroomInfo: { type: Array, required: true },
  },
  accommodationRules: {
    checkIn: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    checkOut: { type: Number, required: true },
  },
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
