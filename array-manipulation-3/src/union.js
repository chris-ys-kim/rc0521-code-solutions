/* exported union */
function union(first, second) {
  var temp = [...first];
  for (var elem of second) {
    if (!temp.includes(elem)) temp.push(elem);
  }
  return temp;
}
