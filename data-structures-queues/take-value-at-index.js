/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let count = 0;
  while (count < index) {
    const top = queue.dequeue();
    queue.enqueue(top);
    count--;
  }
  return queue.dequeue();
}
