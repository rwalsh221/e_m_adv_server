const express = require('express');
const res = require('express/lib/response');
const app = express();

let port = process.env.port || 8080;

app.get('/', (req, res) => res.send('HELLOW FROM THE SERVER'));

app.listen(port, function () {
  console.log(`running server on port ${port}`);
});
