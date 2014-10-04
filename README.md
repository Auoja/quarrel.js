# quarrel.js

A tool for type-checking JavaScript function arguments.

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


## Testing

Make sure you have [Node](http://nodejs.org) installed and then install [Mocha](http://visionmedia.github.io/mocha/) either globally:

```
	node install -g mocha
```

... or locally:

```
	node install
```

Then just run:

```
	node test
```
or:

```
	node test/test.js
```
