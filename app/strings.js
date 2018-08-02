exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var count = 0;
    var result = '';
    var i;
    for (i = 0; i < str.length - 1; i++) {
      var current = str.charAt(i);
      if (current === result.charAt(result.length - 1) && count < amount ) {
        result += current;
        count++;
      }
      else if (current !== result.charAt(result.length - 1)) {
        result += current;
        count = 1;
      }
    }
    return result;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    var result = '';
    var strLength = str.length;
    var i;
    for (i = 0; i < strLength; i++) {
      result += str.charAt(strLength - i - 1);
    }
    return result;
  }
};
