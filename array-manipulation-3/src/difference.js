/* exported difference */
function difference(first, second) {
  var temp = [];
  for (var elem of first) {
    if (!second.includes(elem)) temp.push(elem);
  }
  for (const elem of second) {
    if (!first.includes(elem)) temp.push(elem);
  }
  return temp;
}
