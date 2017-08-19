const express = require('express');
const bodyParser = require('body-parser');
var path    = require("path");

const restService = express();

restService.use( express.static( __dirname + '/public' ));

restService.use(bodyParser.urlencoded({
  extended: true
}));

restService.use(bodyParser.json());

restService.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

restService.listen((process.env.PORT || 8000), function () {
  console.log('Server up and listening in 8000' + process.env.PORT);
});


