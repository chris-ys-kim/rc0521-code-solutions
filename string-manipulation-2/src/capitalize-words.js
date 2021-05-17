/* exported capitalizeWords */
function capitalizeWords(string) {
  var lower = string.toLowerCase();
  var lowerArray = lower.split(' ');
  var capitals = '';
  for (var i = 0; i < lowerArray.length; i++) {
    lowerArray[i] = lowerArray[i].charAt(0).toUpperCase() + lowerArray[i].slice(1);
    capitals += lowerArray[i] + ' ';
  }
  return capitals.slice(0, capitals.length - 1);
}
