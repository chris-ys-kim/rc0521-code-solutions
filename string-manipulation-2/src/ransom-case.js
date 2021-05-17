/* exported ransomCase */

function ransomCase(string) {
  var ransom = '';
  var lower = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      ransom += lower.charAt(i).toUpperCase();
    } else {
      ransom += lower.charAt(i);
    }
  }
  return ransom;
}
