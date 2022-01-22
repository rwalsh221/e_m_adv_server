const router = require('express').Router();

router.get('/', (request, response) => {
  response.json({
    status: 'API IS WORKING',
    message: 'Welcome to em adventures',
  });
});

// router.get('/test', (request, response) => {
//   response.json({
//     status: 'API IS WORKING',
//     message: 'Welcome to test',
//   });
// });
module.exports = router;
