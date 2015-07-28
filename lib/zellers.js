//zeller function: equation to determine the day of the week. If you don't enter a numeric date, a default of 01 is given.
Zellers = function(dates) {

  var q = 1; //giving default 1
  var m = parseInt(dates[0]);
  var y = parseInt(dates[1]) % 100;
  var j = parseInt(dates[1]) / 100;
    if (m < 3) { //Jan = 13, Feb = 14. Need to subtract the year.
      m += 12;
      if(y > 0) {
        y--;
      } else { //Have to change 2000 to 1999. Can't do it just by decrementing
        y = 99;
        j--;
      }
    }
  var h = Math.floor(q + Math.floor((13*(m+1))/5) + y + Math.floor((y/4)) + Math.floor((j/4)) + (5*j)) % 7;
  //changing the start of the week to Sunday. Sunday = 0, Monday = 1...
  //Zellers.adjustDay(h); //make sure this is the returning value of the function
  if(h === 0) {
    return h = 6;
  } else {
    return h - 1;
  }

};

// Zellers.adjustDay = function(h) {
//   if(h === 0) {
//     console.log(h = 0)
//     return h = 6;

//   } else {
//     console.log(h - 1)
//     return h - 1;
//   }
// };

module.exports = Zellers;
