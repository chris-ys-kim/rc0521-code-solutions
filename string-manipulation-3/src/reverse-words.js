/* exported reverseWords */
function reverseWords(string) {
  var temp = string.split(' ');
  var reversedArr = [];
  for (var elem of temp) {
    var tempStr = '';
    for (let i = elem.length - 1; i >= 0; i--) {
      tempStr += elem[i];
    }
    reversedArr.push(tempStr);
  }
  return reversedArr.join(' ');
}
