(function () {
    'use strict';
    var Binal;
    Binal = require('binal-runtime');
    var Tuple;
    Tuple = function (xs) {
        if (!(arguments.length === 1))
            xs = new Binal.Tuple(Array.prototype.slice.call(arguments, 0));
        this.xs = xs;
        return this.xs;
    };
    var NonExhaustivePatterns;
    NonExhaustivePatterns = function (message) {
        if (!(arguments.length === 1))
            message = new Binal.Tuple(Array.prototype.slice.call(arguments, 0));
        this.message = message;
        return this.message;
    };
    return module.exports = {
        NonExhaustivePatterns: NonExhaustivePatterns,
        Tuple: Tuple
    };
}());
