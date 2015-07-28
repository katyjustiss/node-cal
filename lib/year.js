var fullMonth = require('./day');
var month = require('./month');
var _ = require('lodash');



formatMonths = function(year) {
  var monthArr = [];
  var monthTitles;
  var chunkedArr = [];
  var yearArr = [];
  var dayArr = []
//for each month in year. Call the formatDays function.
  for(var i = 1; i <= 12; i++) {
    var dateInput = [i, year];

  //have to change the heading for each calendar
    var monthName = month[i].name + " " + year;
    var spacing = (20 - monthName.length) / 2; //number of spaces needed on each side
    var spacing2 = (20 - month[i].name.length) / 2;
    var sliceNum = spacing + monthName.length;

    //Changing the number of spaces needed into actual spaces.
    var spaces = '';
    for(var s = 1; s <= spacing2; s++) {
      spaces += ' ';
    }
  //get each month for year. Loop through and get each start day.
    var calendar = formatDays(dateInput)

    //slice off the first row and add new month
    var newCalendar = calendar.slice(sliceNum)
    monthTitles = spaces + month[i].name + spaces;

    newCalendar = monthTitles + newCalendar;

    newCalendar = newCalendar.split('\n');
    monthArr.push(newCalendar) //an array of all the month lines
  }

  for(var i = 0; i <= monthArr.length; i++) { //diving month lines
    chunkedArr.push(_.chunk(monthArr[i], 1))
  }


  //Creating the column format for months
  var title = '                             ' + year + '\n\n'
  var rows = [];
  rows.push(title)
  for(var i = 0; i <=7; i++ ) {
    rows.push([chunkedArr[0][i] + '  ' + chunkedArr[1][i] + '  ' + chunkedArr[2][i] + '\n'].join(''));
  }

  for(var i = 0; i <=7; i++ ) {
    rows.push([chunkedArr[3][i] + '  ' + chunkedArr[4][i] + '  ' + chunkedArr[5][i] + '\n'].join(''));
  }

  for(var i = 0; i <=7; i++ ) {
    rows.push([chunkedArr[6][i] + '  ' + chunkedArr[7][i] + '  ' + chunkedArr[8][i] + '\n'].join(''));
  }

  for(var i = 0; i <=7; i++ ) {
    rows.push([chunkedArr[9][i] + '  ' + chunkedArr[10][i] + '  ' + chunkedArr[11][i] + '\n'].join(''));
  }

  rows = rows.join('')
  console.log(rows)
  return rows

  //need to work on month spacing
  //var endSpace = startday - monthlength
  //31- 0 = 0 but 31%4
  //need to find week length from day page.
  //if ends on sunday? then...

}

module.exports = formatMonths;
