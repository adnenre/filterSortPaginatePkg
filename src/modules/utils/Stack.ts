/* The class `Stack<T>` is a generic stack implementation in TypeScript with methods for push, pop,
peek, checking if empty, and getting the size. */
class Stack<T> {
  private stack: T[];

  constructor() {
    this.stack = [];
  }

  /**
   * The `push` function adds an item to the stack in TypeScript.
   * @param {T} item - The `item` parameter represents the element that you want to push onto the
   * stack.
   */
  push(item: T): void {
    this.stack.push(item);
  }

  /**
   * The `pop` function in TypeScript removes and returns the top element of a stack, or returns
   * `undefined` if the stack is empty.
   * @returns The `pop()` method is being called on the `stack` array, which removes and returns the
   * last element of the array. The method returns the removed element of type `T` or `undefined` if
   * the array is empty.
   */
  pop(): T | undefined {
    return this.stack.pop();
  }

  /**
   * The `peek` function in TypeScript returns the top element of a stack without removing it.
   * @returns The `peek()` method is returning the element at the top of the stack (the last element
   * in the `stack` array) or `undefined` if the stack is empty.
   */
  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  /**
   * The `isEmpty` function in TypeScript checks if a stack is empty and returns a boolean value.
   * @returns The `isEmpty()` method is returning a boolean value, specifically `true` if the length
   * of the stack is 0 (indicating that the stack is empty), and `false` otherwise.
   */
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  /**
   * The `size` function in TypeScript returns the number of elements in a stack.
   * @returns The `size()` method is returning the number of elements in the `stack` array.
   */
  size(): number {
    return this.stack.length;
  }
}

export { Stack };
