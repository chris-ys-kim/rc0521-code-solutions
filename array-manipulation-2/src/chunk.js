/* exported chunk */
function chunk(array, size) {
  var temp = [];
  for (var i = 0; i < array.length; i += size) {
    temp.push(array.slice(i, i + size));
  }
  return temp;
}
