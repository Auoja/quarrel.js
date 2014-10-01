(function(exports) {

    var verbose = true;

    function output(str) {
        if (verbose) {
            console.log(str);
        }
    }

    exports.validate = function(conf, types) {
        for (var key in types) {
            if (types.hasOwnProperty(key)) {

                var argtype = typeof conf[key];

                if (argtype === 'object') {
                    if (conf[key] instanceof Array && 'array' !== types[key]) {
                        output("Does not validate. '" + key + "' has type " + argtype + ", expected " + (typeof types[key]) + ".");
                        return false;
                    }
                } else if (argtype !== types[key]) {
                    output("Does not validate. '" + key + "' has type " + argtype + ", expected " + (typeof types[key]) + ".");
                    return false;
                }
            }
        }
        output("Validates");
        return true;
    };

    return exports;

})(typeof exports === 'undefined' ? this['arguments'] = {} : exports);