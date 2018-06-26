exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    let result = 0;
    arr.forEach(function (element) {
      result += element;
    });
    return result;
  },

  remove: function(arr, item) {
    return arr.filter(function (value) {
        return value !== item;
    })
  },

  removeWithoutCopy: function(arr, item) {
    var i,
      arrLength = arr.length;

    for (i = 0; i < arrLength; i += 1) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
      }
    }
    return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.splice(0,0,item);
      return arr;
  },

  curtail: function(arr) {
      arr.splice(0,1);
      return arr;
  },

  concat: function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
  },

  count: function(arr, item) {
      let result = 0;
      arr.forEach(function (element) {
          if (item === element) result++;
      });
      return result;
  },

  duplicates: function(arr) {
    let arr2 = [];
      arr.forEach(function (element) {
          if (exports.arraysAnswers.count(arr, element) > 1) {
            if(exports.arraysAnswers.count(arr2, element) < 1) arr2.push(element);
          }
      });
      return arr2;
  },

  square: function(arr) {
    let result = [];
      arr.forEach(function (element) {
        result.push(element*element);
      });
      return result;
  },

  findAllOccurrences: function(arr, target) {
      let result = [];
      arr.forEach(function (element, index) {
          if(element === target) result.push(index);
      });
      return result;
  }
};
