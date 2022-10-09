class node {
  public value: string | number;
  public left: string | number | null;
  public right: string | number | null;

  constructor(value: string | number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  public root: any;

  constructor() {
    this.root = null;
  }

  insert(value: string | number) {
    const newNode = new node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let tmp = this.root;
    while(true) {
      if (newNode.value === tmp.value) {
        return undefined;
      }
      if (newNode.value < tmp.value) {
        if (tmp.left === null) {
          tmp.left = newNode;
          return this;
        }
        tmp = tmp.left;
      } else {
        if (tmp.right === null) {
          tmp.right = newNode;
          return this;
        }
        tmp = tmp.right;
      }
    }
  }

  contains(value: string | number) {
    if (this.root === null) {
      return false;
    }
    let tmp = this.root;
    while(tmp) {
      if (value < tmp.value) {
        tmp = tmp.left;
      } else if (value > tmp.value) {
        tmp = tmp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);

    while(queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }
}

let myTree = new binarySearchTree();

myTree.insert(47);      //              47
myTree.insert(21);      //             /  \
myTree.insert(76);      //           21    76
myTree.insert(18);      //          / \    / \
myTree.insert(27);      //         18 27  52 82
myTree.insert(52);      //
myTree.insert(82);      //

console.log(myTree.breadthFirstSearch()); // [47, 21, 76, 18, 27, 52, 82]
