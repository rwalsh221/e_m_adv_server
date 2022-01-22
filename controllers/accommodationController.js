const AccommodationModel = require('../models/accommodationModel');

// GET ALL ACCOMODATION
exports.getAllAccommodation = (req, res) => {
  console.log(AccommodationModel);
  AccommodationModel.get((err, accommodation) => {
    if (err) {
      console.log(err);
      console.log('error');
      res.json({
        status: 'error',
        message: err,
      });
    } else {
      res.json({
        status: 'success',
        message: 'Accommodation retrieved successfully',
        data: accommodation,
      });
    }
  });
};

// CREATE NEW ACCOMMODATION
exports.newAccommodation = (req, res) => {
  let accommodation = new AccommodationModel();
  accommodation.name = req.body.name;
  accommodation.location = req.cody.location;

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
  AccommodationModel.findById(
    req.params.accommodation_id,
    (err, accommodation) => {
      if (err) {
        res.send(err);
      }
      res.json({
        message: 'New Accommodation created',
        data: accommodation,
      });
    }
  );
};

// UPDATE ONE ACCOMMODATION
exports.updateAccommodation = (re, res) => {
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

// DELETE ACCOMMODATION
exports.deleteAccommodation = (req, res) => {
  AccommodationModel.remove(
    {
      _id: req.params.accommodation_id,
    },
    (err, accommodation) => {
      if (err) {
        res.send(err);
      }
      res.json({
        status: 'success',
        message: 'accommodation deleted',
      });
    }
  );
};
