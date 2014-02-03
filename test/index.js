var expect = require('chai').use(require('sinon-chai')).expect;
var sinon = require('sinon');
var reporter = require('../');

describe('caus-reporter-console', function() {

  var spy;

  beforeEach(function(done) {
    // spy ??? this is a spy!
    spy = sinon.stub(console, 'log');
    done();
  });

  afterEach(function(done) {
    spy.restore();
    done();
  });

  describe('empty', function() {
    it('works', function(done) {
      reporter({}, function(err) {
        expect(err).to.be.null;
        expect(spy).to.have.not.been.called;
        done();
      });
    });
  });

  describe('one count', function() {
    it('works', function(done) {
      reporter({
        key1: 'value1'
      }, function(err) {
        expect(err).to.be.null;
        expect(spy).to.have.been.calledWith('key1:value1');
        done();
      });
    });
  });

  describe('two counts', function() {
    it('works', function(done) {
      reporter({
        key1: 'value1',
        key2: 'value2'
      }, function(err) {
        expect(err).to.be.null;
        expect(spy.firstCall).to.have.been.calledWith('key1:value1');
        expect(spy.secondCall).to.have.been.calledWith('key2:value2');
        done();
      });
    });
  });

});



