/* exported getKeys */
function getKeys(object) {
  var tempArray = [];
  for (var key in object) {
    tempArray.push(key);
  }
  return tempArray;
}
