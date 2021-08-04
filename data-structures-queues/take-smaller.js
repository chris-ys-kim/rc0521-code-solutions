/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const first = queue.dequeue();
  if (queue.peek() !== undefined) {
    const second = queue.dequeue();
    if (first < second) {
      queue.enqueue(second);
      return first;
    } else if (first === second) {
      queue.enqueue(first);
      return first;
    } else {
      queue.enqueue(first);
      return second;
    }
  }
  return first;
}
