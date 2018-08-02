exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var pattern = /\d/;
    return pattern.test(str);
  },

  containsRepeatingLetter: function(str) {
    var pattern = /.*([a-zA-Z])\1{1,}.*/;
    return pattern.test(str);
  },

  endsWithVowel: function(str) {
    var pattern = /[aeiouAEIOU]\b$/;
    return pattern.test(str);
  },

  captureThreeNumbers: function(str) {
    var pattern = /(\d\d\d)/;
    var eval = str.match(pattern);
    return eval[1];
  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
