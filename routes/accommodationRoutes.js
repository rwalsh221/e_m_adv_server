const router = require('express').Router();

const accommodationController = require('../controllers/accommodationController');

router.get('/', (request, response) => {
  response.json({
    status: 'API IS WORKING',
    message: 'Welcome to em adventures',
  });
});

router
  .route('/accommodation')
  .get(accommodationController.getAllAccommodation)
  .post(accommodationController.newAccommodation);

router
  .route('/accommodation/:accommodation_id')
  .get(accommodationController.viewOneAccommodation)
  .patch(accommodationController.updateAccommodation)
  .put(accommodationController.updateAccommodation)
  .delete(accommodationController.deleteAccommodation);

module.exports = router;
