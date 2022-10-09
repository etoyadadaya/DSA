class node {
  public value: any;
  public next: any

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class queue {
  public first: any;
  public last: any;
  public _length: number;

  constructor(value: any) {
    const newNode = new node(value);
    this.first = newNode;
    this.last = newNode;
    this._length = 1;
  }

  enqueue(value: any) {
    const newNode = new node(value);
    if (this._length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this._length++;
    return this;
  }

  dequeue(): any | undefined {
    if (this._length === 0) {
      return undefined;
    }
    let tmp = this.first;
    if (this._length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      tmp.next = null;
    }
    this._length--;
    return tmp;
  }

  isEmpty(): boolean {
    return this._length === 0;
  }   
}

let myQueue = new queue(1);
myQueue.enqueue(5);
myQueue.dequeue();
console.log(myQueue.isEmpty());
console.log(myQueue)
