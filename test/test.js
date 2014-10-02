var _a = require('../arguments.js');
var assert = require("assert");

var testConf = {
    testString: "foo",
    testNumber: 0,
    testBoolean: true,
    testArray: [12],
    testObject: {},
    testFunction: function() {}
};

describe('Standard Validation', function() {

    describe('Validate String', function() {

        it('Should return true if input is String', function() {
            assert.equal(true, _a.validate(testConf, {
                testString: _a.STRING
            }));
        })

        it('Should return false if input is not String', function() {
            assert.equal(false, _a.validate(testConf, {
                testString: _a.NUMBER
            }));
        })
    })

    describe('Validate Number', function() {

        it('Should return true if input is Number', function() {
            assert.equal(true, _a.validate(testConf, {
                testNumber: _a.NUMBER
            }));
        })

        it('Should return false if input is not Number', function() {
            assert.equal(false, _a.validate(testConf, {
                testNumber: _a.STRING
            }));
        })
    })

    describe('Validate Boolean', function() {

        it('Should return true if input is Boolean', function() {
            assert.equal(true, _a.validate(testConf, {
                testBoolean: _a.BOOL
            }));
        })

        it('Should return false if input is not Boolean', function() {
            assert.equal(false, _a.validate(testConf, {
                testBoolean: _a.STRING
            }));
        })
    })

    describe('Validate Object', function() {

        it('Should return true if input is Object', function() {
            assert.equal(true, _a.validate(testConf, {
                testObject: _a.OBJECT
            }));
        })

        it('Should return false if input is not Object', function() {
            assert.equal(false, _a.validate(testConf, {
                testObject: _a.ARRAY
            }));
        })
    })

    describe('Validate Array', function() {

        it('Should return true if input is Array', function() {
            assert.equal(true, _a.validate(testConf, {
                testArray: _a.ARRAY
            }));
        })

        it('Should return false if input is not Array', function() {
            assert.equal(false, _a.validate(testConf, {
                testArray: _a.OBJECT
            }));
        })
    })

    describe('Validate Function', function() {

        it('Should return true if input is Function', function() {
            assert.equal(true, _a.validate(testConf, {
                testFunction: _a.FUNCTION
            }));
        })

        it('Should return false if input is not Function', function() {
            assert.equal(false, _a.validate(testConf, {
                testFunction: _a.OBJECT
            }));
        })
    })

    describe('Validate Multiple', function() {

        it('Should return true if all inputs are valid', function() {
            assert.equal(true, _a.validate(testConf, {
                    testString: _a.STRING,
                    testNumber: _a.NUMBER,
                    testBoolean: _a.BOOL,
                    testArray: _a.ARRAY,
                    testObject: _a.OBJECT,
                    testFunction: _a.FUNCTION
            }));
        })

        it('Should return false if one input is not valid', function() {
            assert.equal(false, _a.validate(testConf, {
                    testString: _a.NUMBER,
                    testNumber: _a.NUMBER,
                    testBoolean: _a.BOOL,
                    testArray: _a.ARRAY,
                    testObject: _a.OBJECT,
                    testFunction: _a.FUNCTION
            }));
        })

        it('Should return false if multiple inputs are not valid', function() {
            assert.equal(false, _a.validate(testConf, {
                    testString: _a.NUMBER,
                    testNumber: _a.STRING,
                    testBoolean: _a.FUNCTION,
                    testArray: _a.ARRAY,
                    testObject: _a.OBJECT,
                    testFunction: _a.FUNCTION
            }));
        })
    })

    describe('Validate Faulty Use', function() {
        it('Should return false if expected param is not a valid type', function() {
            assert.equal(false, _a.validate(testConf, testConf));
        })
    })

})