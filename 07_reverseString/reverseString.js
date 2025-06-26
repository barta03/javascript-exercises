const reverseString = function(string) {
  let arr = string.split('');
  arr = arr.reverse();
  const str = arr.join('')
  return str;
};

// Do not edit below this line
module.exports = reverseString;
