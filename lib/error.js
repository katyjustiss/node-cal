

Error = function() {
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

module.exports = Error;
