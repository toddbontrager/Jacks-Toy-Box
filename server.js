var express = require('express');
var mongoose = require('mongoose');
// var morgan = require('morgan');
var bodyParser = require('body-parser');
var wd = require('./server/weekdayModel.js');

var port = process.env.PORT || 4568;

var app = express();

app.use(express.static('public'));
// app.use(morgan('dev'));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Routes

//grab all days from database
app.get('/api/days', function(req, res, next){
  wd.find(function(err, days){
    if(err){
      console.log('Error grabbing days from database: ' + err);
      next(err);
    }
    console.log(days);
    res.json(days);
  });
});

app.post('/api/days', function(req, res, next){
  wd.create({
    day: req.body.name,
    toys: req.body.toys
  },
  function(err, days){
    if(err){
      console.log('Error adding day/toy to database: ' + err);
      next(err);
    } else {
      wd.find(function(err, days){
        if(err){
          next(err);
        }
        res.json(days);
      });
    }
  });
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});








