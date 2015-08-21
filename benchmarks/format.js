var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();
var assert = require("assert");
var formatstring = require("./../");
var pff = require("pff");
var story = require("story")(true);
var stringFormatter = require("string-formatter");
var fhellwigStrformat = require("strformat");
require("string.format");
var bifuerString = String.format 

var params = {
	first: "John",
	last: "Smith"
};
var pattern = "Hi, this is {first} and {last}.";
var result = "Hi, this is John and Smith.";

suite.add("formatstring", function() {
	var r = formatstring(pattern, params);
	console.log(r);
	throw 3;
	assert.ok(r === result);
});

// suite.add("RinatMullayanov/string-format", function() {
// 	var r = stringFormatter.format(pattern, params);
// 	assert.ok(r === result);
// });

// suite.add("fiveisprime/story", function() {
// 	var r = story(pattern, params);
// 	assert.ok(r === result);
// });

// suite.add("fhellwig/strformat", function() {
// 	var r = strformat(pattern, params);
// 	assert.ok(r === result);
// });

// suite.add("bifuer/string.format", function() {
// 	var r = bifuerString(pattern, params);
// 	assert.ok(r === result);
// });

module.exports = suite;