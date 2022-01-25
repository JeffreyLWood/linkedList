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
      return "Index not found";
    }
    if (idx === 0) {
      let newNode = new Node(data);
      this.insertFirst(newNode);
      this.printListData();
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

  //Remove at
  removeAt(idx) {
    let current = this.head;
    let previous;
    let count = 0;
    if (idx === 0) {
      this.head = current.next;
      this.printListData();
    } else {
      while (count < idx) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      this.printListData();
    }
    this.size--;
  }

  //Print
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //Clear List
  clear() {
    let current = this.head;
    while (current) {
      current.data = null;
      current = current.next;
      this.size--;
    }
    this.head = null;
    return "List cleared";
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

console.log(ll.printListData());
