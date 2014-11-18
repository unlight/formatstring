module.exports = function(string, data) {
	if (typeof data !== "object" || data === null) {
		data = Array.prototype.slice.call(arguments, 1);
	}
	var position = -1;
	for (var key in data) {
		var token = "{" + key + "}";
		while (true) {
			position = string.indexOf(token, position + 1);
			if (position === -1) {
				break;
			}
			var value = data[key];
			string = string.replace(token, value);
		}
	}
	return string;
}