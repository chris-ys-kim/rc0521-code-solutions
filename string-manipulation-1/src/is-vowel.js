/* exported isVowel */
function isVowel(char) {
  var cha = char.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === cha) {
      return true;
    }
  } return false;
}
