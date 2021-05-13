/* exported filterOutStrings */
function filterOutStrings(values) {
  var outValues = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      outValues.push(values[i]);
    }
  }
  return outValues;
}
