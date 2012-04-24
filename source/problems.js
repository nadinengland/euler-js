var problems = [null]
  , sugar = require('sugar')
  , helper = require('./helper.js');

problems[1] = {
  description: "Find the sum of all the multiples of 3 or 5 below 1000.",
  answer: (function () {

    return (1).upto(999).map(function (x) {
      return ((x % 3) === 0 || (x % 5) === 0) ? x : false;
    }).sum();

  }())
};

problems[6] = {
  description: "Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.",
  answer: (function () {
    var sumOfSquares
      , squareOfSum;

    sumOfSquares = (1).upto(100).reduce(function (a, b) {
      return a + b.pow(2);
    });

    squareOfSum = (1).upto(100).sum().pow(2);

    return (sumOfSquares - squareOfSum).abs();
  }())
};

problems[20] = {
  description: "Find the sum of the digits in the number 100!",
  answer: (function () {
    function factorial(n) {
      var i, value = 1;
      
      for (i = 2; i <= n; i += 1) {
        value *= i;
      }

      return value;
    };

    return factorial(100).toString().split().sum();
  }())
}


problems.forEach(function (problem) {
  var answer, formatted;

  if (problem === null) return;

  answer = problem.answer.toExponential();
  formatted = answer.format();

  console.log(
    problems.indexOf(problem) + ": " +
    formatted + " (" + answer +
    ") -> " + problem.description
  );
});