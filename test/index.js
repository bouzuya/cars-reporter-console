var expect = require('chai').expect;
var sinon = require('sinon');
var reporter = require('../');

describe('caus-reporter-console', function() {

  describe('empty', function() {
    it('works', function(done) {
      // stub ??? this is a spy!
      var stub = sinon.stub(console, 'log');
      reporter({}, function(err) {
        expect(err).to.be.null;
        expect(stub.called).to.be.false;
        stub.restore();
        done();
      });
    });
  });

  describe('one count', function() {
    it('works', function(done) {
      var stub = sinon.stub(console, 'log');
      reporter({
        key1: 'value1'
      }, function(err) {
        expect(err).to.be.null;
        expect(stub.firstCall.calledWith('key1:value1')).to.equal(true);
        stub.restore();
        done();
      });
    });
  });

  describe('two counts', function() {
    it('works', function(done) {
      var stub = sinon.stub(console, 'log');
      reporter({
        key1: 'value1',
        key2: 'value2'
      }, function(err) {
        expect(err).to.be.null;
        expect(stub.firstCall.calledWith('key1:value1')).to.equal(true);
        expect(stub.secondCall.calledWith('key2:value2')).to.equal(true);
        stub.restore();
        done();
      });
    });
  });

});



