#!/usr/bin/env node

//linking to main file
var newDay = require('./lib/day');
// var calendar = require('./lib/calendar');
// var date = require('./lib/inputLength.js');
//var zeller = require('./lib/zellers');


//Getting the day of the week.
// console.log(formatDays);

  // var input = process.argv.slice(2);

  // //assigning the returned array to accessible variable.
  // var dates = checkingLength(input);

  // var zeller = Zellers(dates) //returning day of the week. Sunday = 0
  // console.log(zeller)

  var format = formatDays();
  // console.log(format)
