/* exported flatten */
function flatten(array) {
  var temp = [];
  for (var elem of array) {
    if (Array.isArray(elem)) {
      for (var item of elem) {
        temp.push(item);
      }
    } else {
      temp.push(elem);
    }
  }
  return temp;
}
