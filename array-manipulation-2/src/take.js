/* exported take */
function take(array, count) {
  var take = [];
  for (var i = 0; i < count; i++) {
    take.push(array[i]);
  }
  if (array.length === 0) {
    return [];
  }
  return take;
}
