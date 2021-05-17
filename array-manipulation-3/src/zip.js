/* exported zip */
function zip(first, second) {
  var minLength = first.length;
  if (first.length < second.length) {
    minLength = first.length;
  } else {
    minLength = second.length;
  }

  var temp = [];
  var final = [];
  for (var i = 0; i < minLength; i++) {
    temp.push(first[i]);
    temp.push(second[i]);
    final.push(temp);
    temp = [];
  }
  return final;
}
