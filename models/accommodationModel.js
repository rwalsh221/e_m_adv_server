const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  createDate: {
    type: Date,
    default: Date.now,
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
