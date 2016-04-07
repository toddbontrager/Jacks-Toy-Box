var mongoose = require('mongoose');
var db = require('./dbconfig');

var WeekDaySchema = mongoose.Schema({
  day: String,
  toys: { type: Array, default: [] }
});

var WeekDay = mongoose.model('WeekDay', WeekDaySchema);

module.exports = WeekDay;