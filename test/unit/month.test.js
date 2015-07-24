var should = require("chai").should();
var path = require('path');
var month = require(path.join(process.cwd() + "/lib/month"));

//Month test items
describe('Month', function() {
  describe('object', function() {
    it('should return a month name', function() {
      var jan = month[1];
      var may = month[5];
      var oct = month[10];
      var dec = month[12];
      jan.should.be.an('object');
      jan.name.should.equal('January');
      may.name.should.equal('May');
      oct.name.should.equal('October');
      dec.name.should.equal('December');
    })
    it('should return a month length', function() {
      var jan = month[1];
      var feb = month[2];
      var jun = month[6];
      var dec = month[12];

      jan.should.be.an('object');
      jan.days.should.equal('31');
      feb.days.should.equal('28');
      jun.days.should.equal('30');
      dec.days.should.equal('31');
    })

  });
}); //end of Month test set
