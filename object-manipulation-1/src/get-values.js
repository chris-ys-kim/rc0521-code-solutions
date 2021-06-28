/* exported getValues */
function getValues(object) {
  var values = [];
  for (var x in object) {
    x = 'firstName';
    values.push(object[x]);
  }
  return values;
}
