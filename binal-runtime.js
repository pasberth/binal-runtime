(function () {
'use strict';

function Tuple (xs) {
  this.xs = xs;
}

function mkTuple (xs) {
  return new Tuple(xs);
}

function NonExhaustivePatterns(message) {
  this.message = message;
}

NonExhaustivePatterns.prototype = Object.create(Error.prototype);
NonExhaustivePatterns.prototype.name = "NonExhaustivePatterns";

exports.Tuple = Tuple
exports.mkTuple = mkTuple;
exports.NonExhaustivePatterns = NonExhaustivePatterns;

})();
