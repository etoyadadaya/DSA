class node {
  public value: any;
  public next: any

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class stack {
  public top: any;
  public _length: number;

  constructor(value: any) {
    const newNode = new node(value);
    this.top = newNode;
    this._length = 1;
  }

  push(value: any) {
    const newNode = new node(value);

    if (this._length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this._length++;
    return this;
  }

  pop(): any | undefined {
    if (this._length === 0) {
      return undefined;
    }

    let tmp = this.top;
    this.top = this.top.next;
    tmp.next = null;

    this._length--;
    return tmp;
  }

  isEmpty(): boolean {
    return this._length === 0;
  }
}

let myStack = new stack((11));
myStack.push(12);
myStack.pop();
myStack.push('a');

console.log(myStack)
console.log(myStack.isEmpty())
