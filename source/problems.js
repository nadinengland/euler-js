var problems = [null]
  , sugar = require('sugar')
  , helper = require('./helper.js')
  , BigInt = require('bigint');

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

problems[10] = {
  description: "Find the sum of all the primes below million.",
  answer: (function () {
    function sieve(max) {
      var D = []
        , primes = [];

      (1).upto(max).each(function (q) {
        if (D[q] !== undefined) {
          D.each(function (i) {
            var p = D[]
          });
        }
      })     
    };

    return sieve(1000000);
  }())
}

problems[16] = {
  description: "What is the sum of the digits of the number 2^1000?",
  answer: (function () {
    return BigInt(2).pow(1000).toString().chars().sum(function (n) {
      return n.toNumber();
    });
  }())
}

problems[17] = {
  description: "If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?",
  answer: (function () {
    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
      , teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
      , tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
      , hundred = 'hundred'
      , thousand = 'thousand'
      , and = 'and';


    return "unsolved";
    /*return (1).upto(1000).map(function (n) {
      var counter = 0
        , sentence = "";

      n.toString().reverse().chars(function (ch) {
        switch (counter) {
          case 0:
            senetence += units[n];
            break;
          case 1:

          case 2:
          case 3:
            sentence += units[ch] + thousand;
            break;
        }

        counter += 1;
      });
    });*/
  }())
}

problems[20] = {
  description: "Find the sum of the digits in the number 100!",
  answer: (function () {
    var value = BigInt(1);

    (1).upto(100).forEach(function (n) {
      value = value.mul(n);
    });

    return value.toString().chars().sum(function (n) {
      return n.toNumber();
    });

    // If JS didn't use 64bit precision
    // return (1).upto(100).reduce(function (a, b) {
    //   return a * b;
    // }).toFixed().toString().split().sum(function (n) {
    //  return n.toNumber();
    // });
  }())
}


// Display solutions
problems.forEach(function (problem) {
  if (problem === null) return;

  console.log(
    problems.indexOf(problem) + ": " + problem.answer + " -> " + problem.description
  );
});



