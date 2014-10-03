(function(exports) {

    function stringRepresentation(fn) {
        if (typeof fn == 'function') {
            return fn.toString().match(/function ([^\(]+)/)[1];
        } else {
            return undefined;
        }
    }

    function whatIsThis(obj) {

        if (obj === null || obj === undefined) {
            return undefined;
        }

        var toString = {}.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1];

        return toString;
    }

    exports.sanction = function(conf, types) {
        var validates = true;
        for (var key in types) {
            if (types.hasOwnProperty(key)) {

                var actualType = whatIsThis(conf[key]);
                var expectedType = stringRepresentation(types[key]);

                if (!expectedType) {
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

})(typeof exports === 'undefined' ? this['_q'] = {} : exports);