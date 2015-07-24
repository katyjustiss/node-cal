var should = require("chai").should();
var path = require('path');
var inputLength = require(path.join(process.cwd() + "/lib/inputLength"));

describe('Input', function() {
  describe('#checkingLength()', function() {
    it('should check return an array', function() {
      var argv = process.argv;
      argv.should.be.an('array');
    })
    it('should check return value', function() {
      var testdate = ['2015'];
      checkingLength(testdate).should.eql([1, '2015'])
    })


  });
}); //end of Month test set
