declare class Queue<T> {
    private queue;
    constructor();
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}
export { Queue };
