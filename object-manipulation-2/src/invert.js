/* exported invert */
function invert(source) {
  var invert = {};
  for (var z in source) {
    invert[source[z]] = z;
  }
  return invert;
}
