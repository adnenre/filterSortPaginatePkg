import { U } from "@/modules";

describe("Queue", () => {
  let queue: U.Queue<string>;

  beforeEach(() => {
    queue = new U.Queue<string>();
  });

  test("enqueue and dequeue", () => {
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    expect(queue.dequeue()).toBe("a");
    expect(queue.dequeue()).toBe("b");
    expect(queue.dequeue()).toBe("c");
    expect(queue.dequeue()).toBeUndefined();
  });

  test("peek", () => {
    queue.enqueue("a");
    queue.enqueue("b");
    expect(queue.peek()).toBe("a");
    queue.dequeue();
    expect(queue.peek()).toBe("b");
  });

  test("isEmpty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue("a");
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("size", () => {
    expect(queue.size()).toBe(0);
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    expect(queue.size()).toBe(3);
    queue.dequeue();
    expect(queue.size()).toBe(2);
  });
});
