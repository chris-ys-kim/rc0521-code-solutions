/* exported omit */
function omit(source, keys) {
  if (Object.keys(source).length === 0) {
    return {};
  }

  var temp = {};
  for (var x in source) {
    temp[x] = source[x];
  }

  for (var k in temp) {
    for (var i = 0; i < keys.length; i++) {
      if (k === keys[i]) {
        delete temp[k];
      }
    }
  }

  return temp;
}
