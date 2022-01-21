const router = require('express').Router();

router.get('/', (request, response) => {
  response.json({
    status: 'API IS WORKING',
    message: 'Welcome to em adventures',
  });
});
