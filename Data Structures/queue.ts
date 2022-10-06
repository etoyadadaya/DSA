class Queue {
  private queue: any = [];

  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  peek(): any {
    return this.queue[0];
  }

  enqueue(data: any): any {
    return this.queue.push(data);
  }

  dequeue(): any | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.queue.shift();
  }
}

let queue = new Queue;

console.log(queue.dequeue())
console.log(queue.enqueue(5))
console.log(queue.isEmpty())
console.log(queue.length)
console.log(queue.peek())
