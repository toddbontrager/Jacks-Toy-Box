var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 4568;

mongoURI = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/toydb';
mongoose.connect(mongoURI);

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());

var Toy = mongoose.model('Toy', {
  text: String
})


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});