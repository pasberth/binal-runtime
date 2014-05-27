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

module.exports.Tuple = Tuple
module.exports.mkTuple = mkTuple;
module.exports.NonExhaustivePatterns = NonExhaustivePatterns;
