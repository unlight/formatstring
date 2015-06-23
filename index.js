/* eslint no-constant-condition:0 eol-last:0 */
"use strict";

var openkey = "{";
var closekey = "}";

module.exports = function(format, data) {
    var pieces = [];

    if (typeof data !== "object" || data === null) {
        data = Array.prototype.slice.call(arguments, 1);
    }

    var position = 0;

    while (true) {
        var start = format.indexOf(openkey, position);
        var end = format.indexOf(closekey, position);

        if (start === -1 || end === -1) {
            // Insert trail piece.
            var trail = format.substr(position);
            if (trail !== "") {
                pieces.push(trail);
            }
            break;
        }

        var key = format.substring(start + openkey.length, end);
        var value = String(data[key]);

        var before = format.substring(position, start);
        pieces.push(before);

        pieces.push(value);

        position = end + closekey.length;
    }

    var result = pieces.join("");
    return result;
};
