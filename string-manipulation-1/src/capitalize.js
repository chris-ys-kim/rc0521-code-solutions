/* exported capitalize */
function capitalize(word) {
  var returnWord;
  returnWord = word.toLowerCase();
  return word.charAt(0).toUpperCase() + returnWord.slice(1);
}
