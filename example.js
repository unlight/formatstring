var formatstring = require("./index.js");

console.log(formatstring("a {0} b {1} c {C} d {dd} b2 {1}", {
	0: "-0-",
	1: "-1-",
	C: "-C-",
	dd: "-dd-",
}));