exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var numStr = (num >>> 0).toString(2);
    return parseInt(numStr.charAt(numStr.length - bit));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var numStr = (num >>> 0).toString(2);
    var zeros = '';
    for(var i = numStr.length; i < 8; i++) {
      zeros += '0';
    }
    return zeros + numStr;
  },

  multiply: function(a, b) {
    return a * b;
  }
};
