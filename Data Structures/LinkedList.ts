class node {
  public value: any;
  public next: any;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  public head: any;
  public tail: any;
  public _length: number;

  constructor(value: any) {
    const newNode = new node(value);
    this.head = newNode;
    this.tail = this.head;
    this._length = 1;
  }

  push(value: any): any {
    const newNode = new node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }

    this._length++;
    return this;
  }

  pop(): any | undefined {
    if (!this.head) {
      return undefined;
    }
    
    let tmp = this.head;
    let pre = this.head;

    while (tmp.next) {
      pre = tmp;
      tmp = tmp.next;
    }
    
    this.tail = pre;
    this.tail.next = null;
    this._length--;
    
    if (this._length === 0) {
      this.head = null;
      this.tail = null;
    }

    return tmp;
  }

  unshift(value: any): any {
    const newNode = new node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }

    this._length++;
    return this;
  }

  shift(): any | undefined {
    if (!this.head) {
      return undefined;
    }

    let tmp = this.head;
    this.head = this.head.next;
    tmp.next = null;
    this._length--;

    if (this._length === 0) {
      this.tail = null;
    }
    
    return tmp;
  }

  get(index: number): any | undefined {
    if (index < 0 || index >= this._length) {
      return undefined;
    }
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
    }
    return tmp;
  }

  set(index: number, value: any): boolean {
    let tmp = this.get(index);

    if(tmp) {
      tmp.value = value;
      return true;
    }

    return false;
  }

  insert(index: number, value: any): any | boolean {
    if (index < 0 || index > this._length) {
      return false;
    }
    if (index === this._length) {
      return this.push(value);
    }
    if (index === 0) {
      return this.unshift(value);
    }

    const newNode = new node(value);
    const tmp = this.get(index - 1);
    
    newNode.next = tmp.next;
    tmp.next = newNode;
    
    this._length++;
    return this;
  }

  remove(index: number): any | undefined {
    if (index < 0 || index > this._length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this._length - 1) {
      return this.pop();
    }

    const before = this.get(index - 1);
    const tmp = before.next;
    
    before.next = tmp.next;
    tmp.next = null;
    
    this._length--;
    return tmp;
  }

  reverse() {
    let tmp = this.head;
    this.head = this.tail;
    this.tail = tmp;
    let next = tmp.next;
    let prev = null;
    
    for (let i = 0; i < this._length; i++) {
      next = tmp.next;
      tmp.next = prev;
      prev = tmp;
      tmp = next;
    }

    return this;
  }
}

let myLinkedList = new linkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.pop();
myLinkedList.unshift(4);
myLinkedList.shift()
myLinkedList.set(0, 5);
myLinkedList.insert(1, 55);
myLinkedList.remove(1);
console.log(myLinkedList.get(1));
myLinkedList.reverse();

console.log(myLinkedList)
