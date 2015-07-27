//function to check input length and assign default values if none are entered

checkingLength = function(input) {
  //var input = process.argv.slice(2);
  var argDay;
  var argMonth;
  var argYear;
  var date;
  if(input.length === 0) {
    var thisDate = new Date();
    argMonth = thisDate.getMonth() + 1; //adding 1 to go along with my month obj.
    argYear = thisDate.getFullYear();
  }
  else if(input.length > 0 && input.length <= 1 && input[0] >= 1753 && input[0] <= 9999) {
    argMonth = 01; //give default of 01
    argYear = input[0];
  } else if(input.length > 0 && input.length <= 2 && input[1] >= 1753 && input[1] <= 9999) {
    argMonth = input[0];
    argYear = input[1];
  } else {
    console.log("please enter date for the month and year or the year between 1753-9999");
  }
  date = [argMonth, argYear]
  return date;
};

module.exports = checkingLength;
