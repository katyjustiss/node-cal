#!/usr/bin/env node
var month = require('./month');
var zeller = require('./zellers');
var _ = require('lodash');

formatDays = function(dates) {

  var zelDay = Zellers(dates)

  var monthNum = parseInt(dates[0])
  var year = dates[1]
  //Number of days in the month. Grabbed from the month module.
  var monthDays = parseInt(month[monthNum].days);
  var monthName = month[monthNum].name + " " + year;

  //Creating equal spacing on each side of the month name and year
  var spacing = (20 - monthName.length) / 2; //number of spaces needed on each side
  var spaces = '';
  var monthFormat;
  //Changing the number of spaces needed into actual spaces.
  for(var s = 1; s <= spacing; s++) {
    spaces += ' ';
  }
  monthFormat = spaces + monthName + '\n' + 'Su Mo Tu We Th Fr Sa\n';

  //cheaking for leap year and changing Feburary
  if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    monthDays = 29;
  }

  //adding days of the month into an array
  var dayCount = []
  for(var i = 1; i <= monthDays; i++) {
    if(i < 10) { //need to add a space in front of single digit numbers for formatting
      dayCount.push(' ' + i)
    } else {
      dayCount.push(i); //pushing dayCount to array.
    }
  }

  //adding day spaces to the front pf array.
  for(var j = 1; j <= zelDay; j++) {
    dayCount.unshift("  ")
  }

  //number of weeks rounded up
  var numWeeks = Math.ceil((monthDays + parseInt(zelDay)) / 7);

  //placing each week's days on the same line. Slice starting number and then go through the looped numbers
  var weeksArr = [];
  for(var d = 1; d <= numWeeks; d++) {
    weeksArr.push(dayCount.slice(((d - 1) * 7), (d * 7)).join(' '))
  }

  //joining the arrays at each new line character
  var weeks = weeksArr.join('\n');

  var calendar = monthFormat + weeks;

  //adding appropriate spacing at the end of the month
  switch (numWeeks) {
    case 4:
      calendar += '\n\n';
      break;
    case 5:
      calendar += '\n';
      break;
    case 6:
      calendar += '\n';
      break;
  }
  //console.log(calendar)
  return calendar;

}//end of format function


//exporting my main function
module.exports = formatDays;
