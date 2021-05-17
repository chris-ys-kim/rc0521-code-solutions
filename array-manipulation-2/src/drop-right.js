/* exported dropRight */
function dropRight(array, count) {
  var drop = [];
  for (var i = 0; i < array.length - count; i++) {
    drop.push(array[i]);
  }
  if (array.length[i] === 0) {
    return [];
  }
  return drop;
}
