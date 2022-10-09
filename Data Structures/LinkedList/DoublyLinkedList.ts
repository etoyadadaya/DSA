//TODO PROBLEM IN CYCLES TO ARRAY AND FROM ARRAY!!!

class node {
  public value: any;
  public next: any | null;
  public prev: any | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  public value: any;
  public head: any | null;
  public tail: any | null;
  public _length: number;

  constructor(value: any) {
    const newNode = new node(value);
    this.head = newNode;
    this.tail = newNode;
    this._length = 1;
  }

  push(value: any): any {
   const newNode = new node(value)
         if(this._length === 0) {
             this.head = newNode
             this.tail = newNode
         } else {
             this.tail.next = newNode
             newNode.prev = this.tail
             this.tail = newNode
         }
         this._length++
         return this
  }

  pop(): any | undefined {
   if(this._length === 0) return undefined
          let temp = this.tail
          if (this._length === 1) {
              this.head = null
              this.tail = null
          } else {
              this.tail = this.tail.prev
              this.tail.next = null
              temp.prev = null
          }
          this._length--
          return temp
  }

  unshift(value: any): any {
    const newNode = new node(value)
          if(this._length === 0) {
              this.head = newNode
              this.tail = newNode
          } else {
              newNode.next = this.head
              this.head.prev = newNode
              this.head = newNode
          }
          this._length++
          return this
  }

  shift(): any | undefined {
    if(this._length === 0) return undefined
          let temp = this.head
          if(this._length === 1) {
               this.head = null 
               this.tail = null
           } else {
               this.head = this.head.next
               this.head.prev = null
               temp.next = null
           }
          this._length--
          return temp
  }

  get(index: number): any | undefined {
     if (index < 0 || index >= this._length) return undefined
         let temp = this.head
         if (index < this._length/2) {
             for (let i = 0; i < index; i++) { 
                 temp = temp.next
             }
         } else {
             temp = this.tail
             for (let i = this._length - 1; i > index; i--) { 
                 temp = temp.prev
             }
         }
         return temp
  } 
  
  set(index: number, value: any): boolean {
     let temp = this.get(index)
          if(temp) {
              temp.value = value
              return true
          }
          return false
  }
 
  insert(index: number, value: any): any | boolean {
    if(index < 0 || index > this._length) return false
          if(index === this._length) return this.push(value)
          if(index === 0) return this.unshift(value)
          
          const newNode = new node(value)
          const before = this.get(index - 1)
          const after = before.next
          before.next = newNode
          newNode.prev = before
          newNode.next = after
          after.prev = newNode
          this._length++
          return true
  }

  remove(index: number): any | undefined {
    if(index === 0) return this.shift()
          if(index === this._length - 1) return this.pop()
          if(index < 0 || index >= this._length) return undefined
  
          const temp = this.get(index)
  
          temp.prev.next = temp.next
          temp.next.prev = temp.prev
          temp.next = null
          temp.prev = null

          this._length--
          return temp
  }
}

let myDoublyLinkedList = new doublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.pop();
myDoublyLinkedList.unshift(4);
myDoublyLinkedList.shift();
myDoublyLinkedList.remove(1);
myDoublyLinkedList.insert(2, 3);
console.log(myDoublyLinkedList.get(1));

console.log(myDoublyLinkedList);
