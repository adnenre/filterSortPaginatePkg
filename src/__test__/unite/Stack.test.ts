import { U } from "@/modules";

describe("Stack", () => {
  let stack: U.Stack<number>;

  beforeEach(() => {
    stack = new U.Stack<number>();
  });

  test("push and pop", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  test("peek", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
  });

  test("isEmpty", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test("size", () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
    stack.pop();
    expect(stack.size()).toBe(2);
  });
});
