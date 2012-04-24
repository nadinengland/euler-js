var helper = {}
  , sugar = require('sugar');

Number.extend({
  multiples: function (limit) {
    var multiples = []
      , i = 1
      , result;

    result = this * i;

    for (; result < limit; i += 1) {
      multiples[i] = result;
      result = this * i;
    };
/*
    while (result < limit) {
      multiples[i] = result;
      i += 1;
      result = this * i;
    }
*/
    return multiples;
  }
}, true);

module.export = helper;