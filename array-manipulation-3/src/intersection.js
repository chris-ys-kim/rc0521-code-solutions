/* exported intersection */
function intersection(first, second) {
  var temp = [];
  for (var elem of first) {
    if (second.includes(elem)) temp.push(elem);
  }
  return temp;
}
