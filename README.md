# arguments.js

A tool for making sure arguments passed to a function is of the correct type.

## Usage

```javascript

	function foo(input) {
		if (_a.validate(input, {name: String, age: Number})) {
			// … do stuff
		} else {
			// … do other stuff
		}
	}

	foo({
		name: "John Doe",
		age: 37
	});

```