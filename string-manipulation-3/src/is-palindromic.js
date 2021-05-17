/* exported isPalindromic */
function isPalindromic(string) {
  var temp = string.split(' ');
  var newString = '';
  for (var elem of temp) newString += elem;
  for (var i = 0; i < newString.length / 2; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
