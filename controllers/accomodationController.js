const AccomodationModel = require('../models/accommodationModel');

// GET ALL ACCOMODATION
exports.getAllAccommodation = (req, res) => {
  AccomodationModel.get((err, accommodation) => {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      });
    }
    res.json({
      status: 'success',
      message: 'Accommodation retrieved successfully',
      data: accommodation,
    });
  });
};

// CREATE NEW ACCOMMODATION
exports.newAccommodation = (req, res) => {
  let accommodation = new AccomodationModel();
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
  AccomodationModel.findById(req.params.accommId, (err, accommodation) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: 'New Accommodation created',
      data: accommodation,
    });
  });
};

// UPDATE ONE ACCOMMODATION
exports.updateAccommodation = (re, res) => {
  AccomodationModel.findById(req.params.accommId, (err, accommodation) => {
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
  });
};

// DELETE ACCOMMODATION
exports.deleteAccommodation = (req, res) => {
  AccomodationModel.remove(
    {
      _id: req.params.accommId,
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
