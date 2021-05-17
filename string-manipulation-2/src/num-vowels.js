/* exported numVowels */
function numVowels(string) {
  var lower = string.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCount = 0;
  for (var i = 0; i < lower.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (lower[i] === vowels[j]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}
