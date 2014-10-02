(function(exports) {

    var verbose = true;

    exports.ARRAY = 'array';
    exports.BOOL = 'boolean';
    exports.FUNCTION = 'function';
    exports.NUMBER = 'number';
    exports.OBJECT = 'object';
    exports.STRING = 'string';


    function output(str) {
        if (verbose) {
            console.log('            ' + str);
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

                if (actualType !== expectedType) {
                    output("Does not validate. '" + key + "' has type " + actualType + ", expected " + expectedType + ".");
                    validates = false;
                }
            }
        }
        return validates;
    };

    return exports;

})(typeof exports === 'undefined' ? this['arguments'] = {} : exports);