/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const pop = stack.pop();
    if (stack.peek() === undefined) {
      stack.push(pop);
      return undefined;
    } else {
      const second = stack.peek();
      stack.push(pop);
      return second;
    }
  }
}
