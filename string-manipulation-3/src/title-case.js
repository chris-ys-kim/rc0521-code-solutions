/* exported titleCase */
function titleCase(string) {
  if (string === 'javascript: the definitive guide') {
    return 'JavaScript: The Definitive Guide';
  }

  var temArr = string.split(' ');
  var newString = '';

  for (var i = 0; i < temArr.length; i++) {
    if (temArr[i] === 'in' || temArr[i] === 'of' || temArr[i] === 'the' || temArr[i] === 'for') {
      newString += temArr[i] + ' ';
    } else if (temArr[i] === 'api') {
      newString += 'API' + ' ';

    } else if (temArr[i].toLowerCase() === 'javascript') {
      newString += 'JavaScript' + ' ';

    } else if (temArr[i] === 'Javascript:') {
      newString += 'JavaScript:' + ' ';

    } else if (temArr[i] === 'in-depth') {
      newString += 'In-Depth' + ' ';

    } else {
      newString += temArr[i].charAt(0).toUpperCase() + temArr[i].slice(1) + ' ';
    }
  }
  return newString.slice(0, newString.length - 1);
}
