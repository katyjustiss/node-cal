var fullMonth = require('./day');
var month = require('./month');
var zeller = require('./zellers');
var _ = require('lodash');



formatMonths = function(year) {
  var monthArr = [];
  var monthTitles;
  var chunkedArr = [];
  var yearArr = [];
  var dayArr = []
  var numWeekArr = [];

//for each month in year. Call the formatDays function.
  for(var i = 1; i <= 12; i++) {
    var dateInput = [i, year];

    var zelDay = Zellers(dateInput)
    var numWeeks = Math.ceil((parseInt(month[i].days) + parseInt(zelDay)) / 7)
    var remainder = (parseInt(numWeeks) * 7) - (parseInt(month[i].days) + parseInt(zelDay))
    numWeekArr.push(remainder)

  //have to change the heading for each calendar
    var monthName = month[i].name + " " + year;
    var spacing = (20 - monthName.length) / 2; //number of spaces needed on each side
    var spacing2 = (20 - month[i].name.length) / 2;
    var sliceNum = spacing + monthName.length;

    //Changing the number of spaces needed in header into actual spaces.
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

  } //end of for loop

  for(var i = 0; i <= monthArr.length; i++) { //dividing month lines
    chunkedArr.push(_.chunk(monthArr[i], 1))
  }

  var lineArr = []
  var chunk;
  var newArr = [];
  var newChunkArr = [];

  for(var c = 0; c < 13; c++) {
    for(var a = 0; a < 8; a++) {
      chunk = chunkedArr[c][a];
      if(chunk === undefined) { //trying to ignore the undefined chunk
      } else{
      chunk = chunk.join('');
        while (chunk.length < 20) {
          lineArr = chunk.split('');
          lineArr.push(' ');
          chunk = lineArr.join('');
        }
        newArr.push(chunk)
      }
    } //now I have a string for every line.
  }

  newChunkArr = _.chunk(newArr, 8)
  console.log(newChunkArr[0][7])

  //Creating the column format for months
  var title = '                             ' + year + '\n' + '\n'
  var rows = [];
  rows.push(title)

  for(var i = 0; i <=7; i++ ) {
    rows.push([newChunkArr[0][i] + '  ' + newChunkArr[1][i] + '  ' + newChunkArr[2][i] + '\n'].join(''));
  }

  for(var i = 0; i <=7; i++ ) {
    rows.push([newChunkArr[3][i] + '  ' + newChunkArr[4][i] + '  ' + newChunkArr[5][i] + '\n'].join(''));
  }

  for(var i = 0; i <=7; i++ ) {
    rows.push([newChunkArr[6][i] + '  ' + newChunkArr[7][i] + '  ' + newChunkArr[8][i] + '\n'].join(''));
  }

  for(var i = 0; i <=7; i++ ) {
    rows.push([newChunkArr[9][i] + '  ' + newChunkArr[10][i] + '  ' + newChunkArr[11][i] + '\n'].join(''));
  }

  rows = rows.join('')
  console.log(rows)
  return rows

}

module.exports = formatMonths;
