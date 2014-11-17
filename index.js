module.exports = function(string, data) {
	if (typeof data !== "object" || data === null) {
		data = Array.prototype.slice.call(1, arguments);
	}
	var position = 0;
	for (var key in data) {
		var token = "{" + key + "}";
		while (true) {
			position = string.indexOf(token, position);
			if (position === -1) {
				break;
			}
			var value = data[key];
			string = string.replace(token, value);
		}
	}
	return string;
}