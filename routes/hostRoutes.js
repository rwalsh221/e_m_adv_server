const router = require('express').Router();

const hostController = require('../controllers/hostController');

router
  .route('/host')
  .get(hostController.getAllHost)
  .post(hostController.newHost);

// router
//   .route('/accommodation/:accommodation_id')
//   .get(accommodationController.viewOneAccommodation)
//   .patch(accommodationController.updateAccommodation)
//   .put(accommodationController.updateAccommodation)
//   .delete(accommodationController.deleteAccommodation);

module.exports = router;
