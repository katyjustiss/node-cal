var month = require('./month');
var date = require('./inputLength.js');
var zeller = require('./zellers');


formatDays = function(dates) {
  var input = process.argv.slice(2);
  var dates = checkingLength(input);
  var zelDay = Zellers(dates)
  console.log(zelDay)
  //Number of days in the month. Grabbed from the month module.
  var monthDays = parseInt(month[parseInt(dates[0])].days);
  var monthFormat = '    ' + month[parseInt(dates[0])].name + " " + dates[1] + '\n' + 'Su Mo Tu We Th Fr Sa\n';

  //cheaking for leap year and changing Feburary
  if(dates[1] % 4 === 0 && dates[1] % 100 !== 0 || dates[1] % 400 === 0) {
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
  var numWeeks = Math.ceil((parseInt(monthDays) + parseInt(zelDay)) / 7);

  //placing each week's days on the same line. Slice starting number and then the got throught the looped numbers
  var weeksArr = [];
  for(var d = 1; d <= numWeeks; d++) {
    weeksArr.push(dayCount.slice(((d - 1) * 7), (d * 7)).join(' '))
  }

  //joining the arrays at each new line character
  var weeks = weeksArr.join('\n');

  var calendar = monthFormat + weeks;
  console.log(calendar)

}//end of format function


//exporting my main function
module.exports = formatDays;
