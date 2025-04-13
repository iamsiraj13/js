class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }

    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;
    while (currentNode) {
      if (currentNode.next === this.tail) {
        newLastNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    newLastNode.next = null;
    this.tail = currentNode;
    this.length--;
    return lastNode;
  }
  insertAtTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  shift() {
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
  }
}

let nodelist = new List();
nodelist.push(10);
nodelist.insertAtTail(100);

console.log(nodelist);
