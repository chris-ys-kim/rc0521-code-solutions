/* exported pick */
function pick(source, keys) {
  var tempObj = {};
  for (var x in source) {
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i]) {
        tempObj[x] = source[x];
      }
    }
  }

  for (var y in tempObj) {
    if (tempObj[y] === undefined) {
      delete tempObj[y];
    }
  }

  return tempObj;
}
