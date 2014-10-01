var _arg = require('../arguments.js');
var assert = require("assert");

var simpleConf = {
    name: "Foo",
    age: 12,
    list: [ 13, 37 ]
};


describe('Simple Validation', function() {

    it('should return true', function() {
        assert.equal(true, _arg.validate(simpleConf, {
            name: "string",
            age: "number"
        }));
    })

    it('should return false', function() {
        assert.equal(false, _arg.validate(simpleConf, {
            name: "string",
            age: "string"
        }));
    })
})

describe('Complex Validation', function() {

    it('should return true', function() {
        assert.equal(true, _arg.validate(simpleConf, {
            list: "array"
        }));
    })

    it('should return false', function() {
        assert.equal(false, _arg.validate(simpleConf, {
            list: "number"
        }));
    })
})