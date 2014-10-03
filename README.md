# quarrel.js

A tool for making sure arguments passed to a function is of the correct type.

## Usage

`quarrel.js` is designed to work when the argument is an `Object`.

```javascript

	function foo(input) {
		if (_q.sanction(input, {name: String, age: Number})) {
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

But if that is not your preferred way of doing it, you can do this instead:


```javascript

	function foo(n, a) {
		if (_q.sanction(
			{name: n, age: a},
			{name: String, age: Number})) {
			// … do stuff
		} else {
			// … do other stuff
		}
	}

	foo("John Doe", 37);

```
