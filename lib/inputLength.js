//function to check input length and assign default values if none are entered

checkingLength = function(input) {
  //var input = process.argv.slice(2);
  var argDay;
  var argMonth;
  var argYear;
  if(input.length > 0 && input.length <= 1) {
      argMonth = 01; //give default of 01
      argYear = input[0];
    } else if(input.length > 0 && input.length <= 2) {
      argMonth = input[0];
      argYear = input[1];
    } else {
      console.log("please enter date for year or month and year");
    }
    var date = [argMonth, argYear]
    return date;
};

module.exports = checkingLength;

