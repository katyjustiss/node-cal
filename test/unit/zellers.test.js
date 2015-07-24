var should = require("chai").should();
var path = require('path');
var zellersPath = require(path.join(process.cwd() + "/lib/zellers"));

describe('Input', function() {
  // describe('#Zellers()', function() {
  //   it('should check return value', function() {
  //     var testNumber = [1, '2015'];
  //     Zellers(testNumber).should.equal(4)
  //   });
  // });
  describe('#adjustDay()', function() {
    it('should change the day of the week', function() {
      var dayOfWeek = 0;
      zellersPath.adjustDay(dayOfWeek).should.eql(6)
    });
    it('should change the day of the week', function() {
      var dayOfWeek = 4;
      zellersPath.adjustDay(dayOfWeek).should.eql(3)
    });

  });
}); //end of test set

