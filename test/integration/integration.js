var should = require("chai").should();
var cp = require('child_process');
var path = require('path')
// var error = require(path.join(process.cwd() + "/lib/error"));

describe('CLI', function() {
  describe('Leap February', function() {
    it('should handle leap years', function() {
      testCal('2 2012');
    });
    it('should handle non-leap years', function() {
      testCal('2 2014')
    });
  });
  describe('Month Lengths', function() {
    it('should handle a 4 week month', function() {
      testCal('2 2015')
    });
    it('should handle a 5 week month', function() {
      testCal('1 2015')
    });
    it('should handle a 6 week month', function() {
      testCal('5 2015')
    });
  });
  describe('Year', function() {
    it('it should handle printing a full year', function() {
      testCal('2015')
    });
  });
  describe('Current Month', function() {
    it('should handle no argument', function() {
      var goal = cp.execSync('cal').toString();
      var output = cp.execSync('./cal.js').toString();
      output.should.equal(goal);
    });
  });
  describe('Usage', function() {
    it('should print help for bad arguments', function() {
      //testBadArg('1752');
      //testBadArg('10000');
      //testBadArg('13 2015');
      //testBadArg('asdf');
    });
  });
});


//function style for leap year
function testCal(arg) {
  var sep = arg ? ' ' : ''; //if there is an arg, removing the space.
  var goal = cp.execSync('cal' + sep + arg).toString();
  var output = cp.execSync('./cal.js' + sep + arg).toString();
  output.should.equal(goal);
};

//created error message function because cal doesn't have one for the specific times
// function testBadArg(arg) {
//   var sep = arg ? ' ' : '';
//   var errormsg = cp.execSync(Error());
//   var output = cp.execSync('./cal.js' + sep + arg);
//   output.should.eql(errormsg);
// }

  //CallBack pattern
  // cp.exec(cmd, function(err, goalOutput) {
  //      cp.exec('./app.js 2 2012', function(err, output) { //could change to exec or could add the ['']
  //      output.should.equal(goalOutput);
  //        done();  //need to add done up top.
  //      });
  // });

      //synchronous style
      // var goalOutput = cp.execSync('cal 2 2012');
      // var output = cp.execSync('./app.js 2 2012');
      // output.should.equal(goalOutput);

      //callback style
      //cp.exec('cal 2 2012', function(err, goalOutput) {
      //  cp.execFile('./cal 2 2012', function(err, output) {
      //  output.should.equal(goalOutput);
      //    done();  //need to add done up top.
      //  })
      //})




