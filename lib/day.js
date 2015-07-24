var month = require('./month');
var date = require('./inputLength.js');
var zeller = require('./zellers');


formatDays = function(dates) {

  //returning month name and length
  //console.log(month[parseInt(dates[0])].name) //month name
  //console.log(month[parseInt(dates[0])].days) //month length

  console.log('       ' + month[parseInt(dates[0])].name + " " + dates[1] + '\n' + 'Su Mo Tu We Th Fr Sa\n');

  // var week = ' ';
  // var dayCount = 1
  // for(var i = 0; i <= month[parseInt(dates[0])].days; i++) {
  //if(i === 0) {
  //week += zeller * week;
  //} else if(i % 7 === 0) {
  //week += '\n';
  //}
  //dayCount += 1;
  // }

}//end of dayoftheweek function


//exporting my main function
module.exports = formatDays;
