/* exported capitalizeWord */
function capitalizeWord(word) {
  var returnWord;
  returnWord = word.toLowerCase();
  if (returnWord === 'javascript') {
    return returnWord.charAt(0).toUpperCase() + returnWord.slice(1, 4) +
      returnWord.charAt(4).toUpperCase() + returnWord.slice(5);
  }
  return returnWord.charAt(0).toUpperCase() + returnWord.slice(1);
}
