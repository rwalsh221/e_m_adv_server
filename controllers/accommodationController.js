const AccommodationModel = require('../models/accommodationModel');
const router = require('../routes/accommodationRoutes');

// GET ALL ACCOMODATION
// exports.getAllAccommodation = (req, res) => {
//   console.log(AccommodationModel);
//   AccommodationModel.get((err, accommodation) => {
//     console.log('GETETETETETETETETE');
//     if (err) {
//       console.log(err);
//       console.log('error');
//       res.json({
//         status: 'error',
//         message: err,
//       });
//     } else {
//       res.json({
//         status: 'success',
//         message: 'Accommodation retrieved successfully',
//         data: accommodation,
//       });
//     }
//   });
//   console.log(AccommodationModel.get());
// };

exports.getAllAccommodation = async (req, res) => {
  try {
    console.log(req.params.test);
    const accommodation = await AccommodationModel.find({});

    await res.json({
      status: 'success',
      message: 'Accommodation retrieved successfully',
      data: accommodation,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err.message,
    });
  }
};

// CREATE NEW ACCOMMODATION
exports.newAccommodation = (req, res) => {
  let accommodation = new AccommodationModel();

  accommodation.accommodationId = req.body.accommodationId;
  accommodation.accommodationName = req.body.accommodationName;
  accommodation.accommodationDescription.shortDescription =
    req.body.shortDescription;
  accommodation.accommodationDescription.longDescription =
    req.body.longDescription;
  accommodation.numGuests = req.body.numGuests;
  accommodation.occupancy.numBedrooms = req.body.numBedrooms;
  accommodation.occupancy.numBathrooms = req.body.numBathrooms;
  accommodation.occupancy.numGuests = req.body.numGuests;
  accommodation.accommodationLocation.latlon.lat = req.body.lat;
  accommodation.accommodationLocation.latlon.lon = req.body.lon;
  accommodation.accommodationLocation.city = req.body.city;
  accommodation.accommodationLocation.accommodationType =
    req.body.accommodationType;
  accommodation.accommodationLocation.accommodationSetting =
    req.body.accommodationSetting;
  accommodation.basePrice = req.body.basePrice;
  accommodation.accommodationDescription.features = req.body.features;
  accommodation.accommodationDescription.sharedAccommodation =
    req.body.sharedAccommodation;
  accommodation.accommodationDescription.starAmenity = req.body.starAmenity;
  accommodation.accommodationLocation.locationDescription =
    req.body.locationDescription;
  accommodation.accommodationLocation.country = req.body.country;
  accommodation.accommodationRules.checkIn.min = req.body.checkInMin;
  accommodation.accommodationRules.checkIn.max = req.body.checkInMax;
  accommodation.accommodationRules.checkOut = req.body.checkOut;
  accommodation.save((err) => {
    if (err) {
      res.json(err);
    }
    res.json({
      message: 'New Accommodation created',
      data: accommodation,
    });
  });
};

// VIEW ONE ACCOMMODATION
exports.viewOneAccommodation = (req, res) => {
  console.log('view one');
  AccommodationModel.findById(
    req.params.accommodation_id,
    (err, accommodation) => {
      if (err) {
        res.send(err);
      }
      res.json({
        message: 'one accomodation',
        data: accommodation,
      });
    }
  );
};

// UPDATE ONE ACCOMMODATION
exports.updateAccommodation = (req, res) => {
  AccommodationModel.findById(
    req.params.accommodation_id,
    (err, accommodation) => {
      if (err) {
        res.send(err);
      }
      accommodation.name = req.body.name;
      accommodation.location = req.body.location;

      accommodation.save(() => {
        if (err) {
          res.json(err);
        }
        res.json({
          message: 'accommodation updated',
          data: accommodation,
        });
      });
    }
  );
};

exports.updateAccommodation = async (req, res) => {
  try {
    const accommodation = await AccommodationModel.findById(
      req.params.accommodation_id
    );

    if (req.body.name) accommodation.name = req.body.name;
    if (req.body.location) accommodation.location = req.body.location;

    await accommodation.save();
    res.json({
      message: 'accommodation updated',
      data: accommodation,
    });
  } catch {}
};

// DELETE ACCOMMODATION
// exports.deleteAccommodation = (req, res) => {
//   AccommodationModel.remove(
//     {
//       _id: req.params.accommodation_id,
//     },
//     (err, accommodation) => {
//       if (err) {
//         res.send(err);
//       }
//       res.json({
//         status: 'success',
//         message: 'accommodation deleted',
//       });
//     }
//   );
// };

exports.deleteAccommodation = async (req, res) => {
  try {
    await AccommodationModel.deleteOne({ _id: req.params.accommodation_id });

    res.json({ status: 'success', message: 'accommodation deleted' });
  } catch {
    res.send(err);
  }
};
