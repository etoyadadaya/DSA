class Stack {
  private stack: any[];

  constructor() {
    this.stack = [];
  }

  get length(): number {
    return this.stack.length;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  peek(): number | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.stack.length -1];
  }

  push(data: any): number {
    return this.stack.push(data);
  }

  pop(): number | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack.pop();
  }
}

let stack = new Stack;
stack.push('a');
stack.pop();
stack.isEmpty();
stack.peek();
stack.length;
