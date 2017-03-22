var assert = require('assert');

var rotator = require('../../lib/string-rotator');

describe('rotator', function(){
  describe('rotate', function(){
    it('should rotate hello', function(done){
      assert.equal(rotator.rotate("hello"), 'ifmmp');
      done();
    });

    it('should handle empty strings', function(done){
      assert.equal(rotator.rotate(""), "");
      done();
    });

    it('should handle zs', function(done){
      assert.equal(rotator.rotate("z"), "a");
      done();
    });

    it('should handle upper cases', function(done){
      assert.equal(rotator.rotate("WTF"), "xug");
      done();
    });

    it('should handle non alphanumeric characters', function(done){
      assert.equal(rotator.rotate("WT F!!!!_&"), "xug");
      done();
    });
  });
});
