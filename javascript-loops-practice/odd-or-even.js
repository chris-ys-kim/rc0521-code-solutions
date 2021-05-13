/* exported oddOrEven */
function oddOrEven(numbers) {
  var tempArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      tempArray.push('even');
    } else {
      tempArray.push('odd');
    }
  }
  return tempArray;
}
