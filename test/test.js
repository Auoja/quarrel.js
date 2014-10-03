var _q = require('../quarrel.js');
var assert = require("assert");

var testConf = {
    testString: "foo",
    testNumber: 0,
    testBoolean: true,
    testArray: [],
    testObject: {},
    testFunction: function() {},
    testDate: new Date()
};

describe('Standard Validation', function() {

    describe('Validate String', function() {

        it('Should return true if input is String', function() {
            assert.equal(true, _q.sanction(testConf, {
                testString: String
            }));
        })

        it('Should return false if input is not String', function() {
            assert.equal(false, _q.sanction(testConf, {
                testString: Number
            }));
        })
    })

    describe('Validate Number', function() {

        it('Should return true if input is Number', function() {
            assert.equal(true, _q.sanction(testConf, {
                testNumber: Number
            }));
        })

        it('Should return false if input is not Number', function() {
            assert.equal(false, _q.sanction(testConf, {
                testNumber: String
            }));
        })
    })

    describe('Validate Boolean', function() {

        it('Should return true if input is Boolean', function() {
            assert.equal(true, _q.sanction(testConf, {
                testBoolean: Boolean
            }));
        })

        it('Should return false if input is not Boolean', function() {
            assert.equal(false, _q.sanction(testConf, {
                testBoolean: String
            }));
        })
    })

    describe('Validate Object', function() {

        it('Should return true if input is Object', function() {
            assert.equal(true, _q.sanction(testConf, {
                testObject: Object
            }));
        })

        it('Should return false if input is not Object', function() {
            assert.equal(false, _q.sanction(testConf, {
                testObject: Array
            }));
        })
    })

    describe('Validate Array', function() {

        it('Should return true if input is Array', function() {
            assert.equal(true, _q.sanction(testConf, {
                testArray: Array
            }));
        })

        it('Should return false if input is not Array', function() {
            assert.equal(false, _q.sanction(testConf, {
                testArray: Object
            }));
        })
    })

    describe('Validate Function', function() {

        it('Should return true if input is Function', function() {
            assert.equal(true, _q.sanction(testConf, {
                testFunction: Function
            }));
        })

        it('Should return false if input is not Function', function() {
            assert.equal(false, _q.sanction(testConf, {
                testFunction: Object
            }));
        })
    })

    describe('Validate Date', function() {

        it('Should return true if input is Date', function() {
            assert.equal(true, _q.sanction(testConf, {
                testDate: Date
            }));
        })

        it('Should return false if input is not Date', function() {
            assert.equal(false, _q.sanction(testConf, {
                testDate: Object
            }));
        })
    })

    describe('Validate Multiple', function() {

        it('Should return true if all inputs are valid', function() {
            assert.equal(true, _q.sanction(testConf, {
                    testString: String,
                    testNumber: Number,
                    testBoolean: Boolean,
                    testArray: Array,
                    testObject: Object,
                    testFunction: Function,
                    testDate: Date
            }));
        })

        it('Should return false if one input is not valid', function() {
            assert.equal(false, _q.sanction(testConf, {
                    testString: Number,
                    testNumber: Number,
                    testBoolean: Boolean,
                    testArray: Array,
                    testObject: Object,
                    testFunction: Function,
                    testDate: Date
            }));
        })

        it('Should return false if multiple inputs are not valid', function() {
            assert.equal(false, _q.sanction(testConf, {
                    testString: Number,
                    testNumber: String,
                    testBoolean: Function,
                    testArray: Array,
                    testObject: Object,
                    testFunction: "asdf",
                    testDate: Date
            }));
        })
    })

})