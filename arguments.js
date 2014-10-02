(function(exports) {

    exports.ARRAY = 'array';
    exports.BOOL = 'boolean';
    exports.FUNCTION = 'function';
    exports.NUMBER = 'number';
    exports.OBJECT = 'object';
    exports.STRING = 'string';

    function validateExpectedType(type) {
        switch (type) {
            case exports.ARRAY:
            case exports.BOOL:
            case exports.FUNCTION:
            case exports.NUMBER:
            case exports.OBJECT:
            case exports.STRING:
                return true;
            default:
                return false;
        }
    }

    function whatIsThis(obj) {
        var type = typeof obj;

        if (type === exports.OBJECT && (obj instanceof Array)) {
            type = exports.ARRAY;
        }

        return type;
    }

    exports.validate = function(conf, types) {
        var validates = true;
        for (var key in types) {
            if (types.hasOwnProperty(key)) {
                var actualType = whatIsThis(conf[key]);
                var expectedType = types[key];

                if (!validateExpectedType(expectedType)) {
                    console.log("'" + key + "' has invalid type.");
                    validates = false;
                } else if (actualType !== expectedType) {
                    console.log("'" + key + "' has type " + actualType + ", expected " + expectedType + ".");
                    validates = false;
                }
            }
        }
        return validates;
    };

    return exports;

})(typeof exports === 'undefined' ? this['arguments'] = {} : exports);