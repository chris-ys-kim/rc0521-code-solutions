/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suff = [];
  for (var i = 0; i < words.length; i++) {
    suff.push(words[i] + suffix);
  }
  return suff;
}
