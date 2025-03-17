class Arr {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor(value) {
    const newNode = new Arr(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  // adding node end of the list

  push(value) {
    const newNode = new Arr(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  // adding node beggining of the list
  unshift(value) {
    const newNode = new Arr(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next; // Slow 1 ধাপ এগোয়
      fast = fast.next.next; // Fast 2 ধাপ এগোয়
    }

    return slow.value; // Middle নোডের ভ্যালু রিটার্ন করবো
  }
}

const node = new List(10);
node.push(100);
node.push(200);
node.push(300);
node.push(400);
node.push(500);
node.unshift("hello");
node.unshift("world");
node.unshift("bangladesh");
console.log(node.findMiddle());

console.log(node);
