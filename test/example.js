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
    describe('Validate String', function() {

        it('should return true if input is String', function() {
            assert.equal(true, _a.validate(testConf, {
                testString: _a.STRING
            }));
        })

        it('should return false if input is not String', function() {
            assert.equal(false, _a.validate(testConf, {
                testString: _a.NUMBER
            }));
        })
    })

    describe('Validate Number', function() {

        it('should return true if input is Number', function() {
            assert.equal(true, _a.validate(testConf, {
                testNumber: _a.NUMBER
            }));
        })

        it('should return false if input is not Number', function() {
            assert.equal(false, _a.validate(testConf, {
                testNumber: _a.STRING
            }));
        })
    })

    describe('Validate Boolean', function() {

        it('should return true if input is Boolean', function() {
            assert.equal(true, _a.validate(testConf, {
                testBoolean: _a.BOOL
            }));
        })

        it('should return false if input is not Boolean', function() {
            assert.equal(false, _a.validate(testConf, {
                testBoolean: _a.STRING
            }));
        })
    })
})

describe('Complex Validation', function() {

    describe('Validate Object', function() {

        it('should return true if input is Object', function() {
            assert.equal(true, _a.validate(testConf, {
                testObject: _a.OBJECT
            }));
        })

        it('should return false if input is not Object', function() {
            assert.equal(false, _a.validate(testConf, {
                testObject: _a.ARRAY
            }));
        })
    })

    describe('Validate Array', function() {

        it('should return true if input is Array', function() {
            assert.equal(true, _a.validate(testConf, {
                testArray: _a.ARRAY
            }));
        })

        it('should return false if input is not Array', function() {
            assert.equal(false, _a.validate(testConf, {
                testArray: _a.OBJECT
            }));
        })
    })

})