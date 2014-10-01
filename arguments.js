(function(exports) {

    var verbose = true;

    exports.ARRAY = 'array';
    exports.BOOL = 'boolean';
    exports.NUMBER = 'number';
    exports.OBJECT = 'object';
    exports.STRING = 'string';


    function output(str) {
        if (verbose) {
            console.log(str);
        }
    }

    function whatIsThis(obj) {
        var type = typeof obj;

        switch (type) {
            case exports.OBJECT:
                if (obj instanceof Array) {
                    return exports.ARRAY;
                }
            case exports.STRING:
            case exports.NUMBER:
            case exports.BOOL:
                return type;
        }

        output(type + " is unknown");
    }

    exports.validate = function(conf, types) {
        for (var key in types) {
            if (types.hasOwnProperty(key)) {
                var actualType = whatIsThis(conf[key]);
                var expectedType = types[key];

                if (actualType !== expectedType) {
                    output("Does not validate. '" + key + "' has type " + actualType + ", expected " + expectedType + ".");
                    return false;
                }
            }
        }
        output("Validates");
        return true;
    };

    return exports;

})(typeof exports === 'undefined' ? this['arguments'] = {} : exports);