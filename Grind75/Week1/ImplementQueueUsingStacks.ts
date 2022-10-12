class MyQueue {
  public stack: number[];

  constructor() {
    this.stack = [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    if (this.stack.length < 1) {
      return undefined;
    }
    return this.stack.shift();
  }

  peek(): number {
    return this.stack[0];
  }

  empty(): boolean {
    return this.stack.length === 0;
  }
}
