/* exported takeRight */
function takeRight(array, count) {
  var take = [];
  for (var i = array.length - count; i < array.length; i++) {
    take.push(array[i]);
  }
  if (array.length === 0) {
    return [];
  }
  return take;
}
