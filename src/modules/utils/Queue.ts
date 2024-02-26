class Queue<T> {
  //The `private queue: T[];` line in the Queue class is declaring a private property `queue` of type array `T`. This property is used to store the elements of the queue.

  private queue: T[];

  constructor() {
    this.queue = [];
  }

  //The `enqueue(item: T): void` method in the Queue class is adding an item of type T to the end of the queue. It uses the `push` method of the array to add the item to the queue.
  enqueue(item: T): void {
    this.queue.push(item);
  }

  //The `dequeue()` method in the Queue class is removing and returning the first item in the queue. It uses the `shift` method of the array to remove the first item from the queue and return it. The method returns the item of type T that was removed from the queue, or `undefined` if the queue is empty.
  dequeue(): T | undefined {
    return this.queue.shift();
  }

  //The `peek()` method in the Queue class is returning the first item in the queue without removing it. It simply accesses the first element in the queue array without modifying the queue itself. If the queue is empty, it will return `undefined`.
  peek(): T | undefined {
    return this.queue[0];
  }

  //The `isEmpty()` method in the Queue class is checking if the queue is empty or not. It does this by comparing the length of the `queue` array to 0. If the length is 0, it means the queue is empty, and the method returns `true`. If the length is not 0, it means there are elements in the queue, and the method returns `false`. This method helps to determine whether there are any elements currently in the queue.
  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  //The `size()` method in the Queue class is returning the number of elements currently in the queue. It achieves this by returning the length of the `queue` array, which represents the number of elements stored in the queue at that moment. This method provides a way to determine the current size or number of elements in the queue.
  size(): number {
    return this.queue.length;
  }
}

export { Queue };
