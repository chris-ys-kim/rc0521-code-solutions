/* exported maxValue */

function maxValue(stack) {
  let highest = -Infinity;
  while (stack.peek() !== undefined) {
    const next = stack.pop();
    if (next > highest) {
      highest = next;
    }
  }
  return highest;
}
