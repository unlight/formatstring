
formatstring
------------
Simple C# style format function.

Examples
--------
```js
var format = require("formatstring");
var params = {
	first: "John",
	info: {
		age: 29
	}
};
var pattern = "Hello, this is {first}, I'm {info.age}.";
var output = format(pattern, params);
console.log(output); // Hello, this is John, I'm 29.
```

If you don't use nested values, you can use `formatstring` v1 for faster parsing.
```js
npm install formatstring@1
```
