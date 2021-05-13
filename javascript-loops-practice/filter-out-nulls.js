/* exported filterOutNulls */
function filterOutNulls(values) {
  var outNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      outNulls.push(values[i]);
    }
  }
  return outNulls;
}
