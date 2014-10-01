function validate(conf, types) {
    for (var key in types) {
        if (types.hasOwnProperty(key)) {
            if (typeof conf[key] !== types[key]) {
                console.log("Does not validate. '" + key + "' has type " + (typeof conf[key]) + ", expected " + (typeof types[key]) + ".");
                return false;
            }
        }
    }
    console.log("Validates");
    return true;
}



function test(conf) {
    validate(conf, {
        name: "string",
        age: "number",
        test: "string"
    });
}

test({
    name: "Foo",
    age: 12,
    test: "12"
});

test({
    name: "Foo",
    age: 12,
    test: 12
});