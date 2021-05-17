/* exported unique */
function unique(array) {
  var temp = [];
  for (var element of array) {
    if (!temp.includes(element)) {
      temp.push(element);
    }
  }
  return temp;
}
