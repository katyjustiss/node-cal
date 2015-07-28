#!/usr/bin/env node

//linking to main file
var newMonth = require('./lib/day');
var newYear = require('./lib/year');
// var date = require('./lib/inputLength.js');
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
    console.log(" ")
    console.log("Please enter a date in the correct format:");
    console.log(" ")
    console.log("   month and year --> 03 2015")
    console.log("   year --> 2015")
    console.log(" ")
    console.log("The month should be between 1-12")
    console.log("The year should be between 1753-9999")
    console.log(" ")
    console.log("If you don't enter anything, your current month and year are printed")
  }

