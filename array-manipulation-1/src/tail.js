/* exported tail */
function tail(array) {
  var tempArray = [];
  for (var i = 1; i < array.length; i++) {
    tempArray.push(array[i]);
  }
  return tempArray;
}
