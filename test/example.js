var _a = require('../arguments.js');
var assert = require("assert");

var testConf = {
    testString: "foo",
    testNumber: 0,
    testBoolean: true,
    testArray: [12],
    testObject: {}
};

describe('Simple Validation', function() {

    it('should return true', function() {
        assert.equal(true, _a.validate(testConf, {
            testString: _a.STRING,
            testNumber: _a.NUMBER,
            testBoolean: _a.BOOL
        }));
    })

    it('should return false', function() {
        assert.equal(false, _a.validate(testConf, {
            testString: _a.STRING,
            testNumber: _a.NUMBER,
            testBoolean: _a.NUMBER
        }));
    })
})

describe('Complex Validation', function() {

    it('should return true', function() {
        assert.equal(true, _a.validate(testConf, {
            testObject: _a.OBJECT
        }));
    })

    it('should return false', function() {
        assert.equal(false, _a.validate(testConf, {
            testObject: _a.ARRAY
        }));
    })

    it('should return true', function() {
        assert.equal(true, _a.validate(testConf, {
            testArray: _a.ARRAY
        }));
    })

    it('should return false', function() {
        assert.equal(false, _a.validate(testConf, {
            testArray: _a.OBJECT
        }));
    })
})