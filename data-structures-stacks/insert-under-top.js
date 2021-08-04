/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const topValue = stack.peek();
  if (topValue !== undefined) {
    const pop = stack.pop();
    stack.push(value);
    stack.push(pop);
  }
}
