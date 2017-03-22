var _ = require('lodash');

function rotate(str){
  if (!str){
    return "";
  }

  var charArray = _.map(str.toLowerCase().replace(/[^a-z]/g, ''), function(char){
    var newCharCode;
    if (char == 'z'){
      newCharCode = 'a'.charCodeAt(0);
    } else {
      newCharCode = char.charCodeAt(0) + 1;
    }
    return String.fromCharCode(newCharCode);
  });
  return _.reduce(charArray, function(newStr, char){
    return newStr + char;
  });
}

module.exports = {
  rotate: rotate
}


///gotchas
/*
parseInt- tried to use it. it is for turning string versions of numbers into numbers,
not converting characters into their ascii codes. charCodeAt() is what i wanted.

_.map returns an array, not a string.

*/
