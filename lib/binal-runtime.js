(function () {
    'use strict';
    var Binal;
    Binal = require('binal-runtime');
    var Tuple;
    Tuple = function (xs) {
        if (!(arguments.length === 1))
            xs = new Binal.Tuple(Array.prototype.slice.call(arguments, 0));
        this.xs = xs;
        return undefined;
    };
    var NonExhaustivePatterns;
    NonExhaustivePatterns = function (message) {
        if (!(arguments.length === 1))
            message = new Binal.Tuple(Array.prototype.slice.call(arguments, 0));
        this.message = message;
        return undefined;
    };
    return module.exports = {
        NonExhaustivePatterns: NonExhaustivePatterns,
        Tuple: Tuple
    };
}());
