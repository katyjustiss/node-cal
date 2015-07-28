#!/usr/bin/env node

//linking to main file
var newMonth = require('./lib/day');
var newYear = require('./lib/year');
var error = require('./lib/error');
var zeller = require('./lib/zellers');


var input = process.argv.slice(2);

var argMonth;
var argYear;
var dates;

  if(input.length === 0) {
    var thisDate = new Date();
    argMonth = thisDate.getMonth() + 1; //adding 1 to go along with my month obj.
    argYear = thisDate.getFullYear();
    dates = [argMonth, argYear]
    var calendar = formatDays(dates);
    console.log(calendar)
  }
  else if(input.length === 1 && input[0] >= 1753 && input[0] <= 9999) {
    argYear = input[0];
    year = argYear;
    formatMonths(year)
  } else if(input.length === 2 && input[0] >= 1 && input[0] <= 12 && input[1] >= 1753 && input[1] <= 9999) {
    argMonth = input[0];
    argYear = input[1];
    dates = [argMonth, argYear]
    var calendar = formatDays(dates);
    console.log(calendar)
  } else {
    Error();
  }

