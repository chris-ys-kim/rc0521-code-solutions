/* exported initial */
function initial(array) {
  var tempArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    tempArray.push(array[i]);
  }
  return tempArray;
}
