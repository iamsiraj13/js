/**
 * Linked List (singly linked list)
 * array [1, 5, 7, 8, 10]
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  // adding node at the end of the linked list
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  // adding node at the beggining
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
}

const linkedList = new LinkedList(10);
linkedList.push(15);
linkedList.push(25);
linkedList.push(30);
linkedList.push(50);
linkedList.push(60);
linkedList.unshift(110);
linkedList.unshift(1200);
linkedList.unshift(300);
console.log(linkedList);
