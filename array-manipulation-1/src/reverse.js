/* exported reverse */
function reverse(array) {
  var tempArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    tempArray.push(array[i]);
  }
  return tempArray;
}
