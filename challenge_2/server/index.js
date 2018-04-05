const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

let app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/purchase', function (req, res) {
  console.log('Server received a post request', req.body);
  db.methods.save(req.body);
  res.send();
});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});