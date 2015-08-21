var formatstring = require("./index.js");

console.log("incoming", "git clone {0} tmp-repo");
console.log(formatstring("git clone {0} tmp-repo", ["path"]));

console.log("incoming", "a{1}b{0}c{0}d{1}");
console.log(formatstring("a{1}b{0}c{0}d{1}", {
	0: "{1}",
	1: "{0}",
	a: {b: "c"}
}));

console.log(formatstring("a {0} b {1} c {C} d {dd} b2 {1}", {
	0: "-0-",
	1: "x{1}",
	C: "-C-",
	dd: "-dd-",
}));
