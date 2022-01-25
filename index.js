class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //Insert last
  insertLast(data) {
    let node = new Node(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }
  //Insert at index
  insertAt(idx, data) {
    if (idx > 0 && idx > this.size) {
      return;
    }
    if (idx === 0) {
      let newNode = new Node(data);
      this.insertFirst(newNode);
      return;
    }

    let newNode = new Node(data);
    let current = this.head;
    let count = 0;
    while (count < idx) {
      current = current.next;
      count++;
    }
    newNode.next = current.next.next;
    current.next = newNode;

    return this.printListData();
  }

  //Get at index
  getAt(idx) {
    let current = this.head;
    let count = 0;
    while (count < idx) {
      current = current.next;
      count++;
    }
    return current.data;
  }
  //Print
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(500);
ll.insertFirst(600);
ll.insertFirst(700);

console.log(ll.insertAt(2, 7));
