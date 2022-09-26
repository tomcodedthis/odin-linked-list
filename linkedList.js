class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
  }
  append(value) {
    while (this.headNode.nextNode) {
      // WHILE there is a next-Node...
      this.headNode = this.headNode.nextNode; // ...THEN that next-Node becomes the head-Node...
    }
    this.headNode.nextNode = new Node(value); // ...THEN the new-Node becomes the final next-Node
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.headNode; // the head-Node becomes the next-Node of the new-Node
    this.headNode = newNode; // ...THEN the new-Node becomes the head-Node
  }
  size() {
    let listSize = 1; // list-size is set to 1 head-Node
    while (this.headNode.nextNode) {
      // WHILE there is a next-Node...
      listSize += 1; // ...list-size increase by 1...
      this.headNode = this.headNode.nextNode; // ...THEN the next-Node becomes the head-Node
    }
    return listSize;
  }
  getHead() {
    return this.headNode;
  }
  getTail() {
    while (this.headNode.nextNode) {
      // WHILE there is a next-Node...
      this.headNode = this.headNode.nextNode; // ...THEN the next-Node becomes the head-Node
    }
    return this.headNode; // returns when the next-Node is null
  }
  atIndex(index) {
    let currentIndex = 0;
    while (currentIndex !== index) {
      // WHILE current-index is not index...
      this.headNode = this.headNode.nextNode; // ...next-Node becomes head-Node
      currentIndex += 1;
    }
    return this.headNode; // returns when current-index === index
  }
  pop() {
    return (this.headNode = this.headNode.nextNode); // next-Node becomes head-Node and returns
  }
  contains(value) {
    while (this.headNode) {
      // WHILE there is a head-Node...
      if (this.headNode.value === value) return true; // ...IF current head-Node contains value return true
      this.headNode = this.headNode.nextNode; // ELSE next-Node becomes head-Node
    }
    return false;
  }
  find(value) {
    let currentIndex = 0;
    while (this.headNode) {
      // WHILE there is a head-Node...
      if (this.headNode.value === value) return currentIndex; // IF head-Node value === value return currentIndex...
      this.headNode = this.headNode.nextNode; // ...ELSE next-Node becomes head-Node
      currentIndex += 1;
    }
    return null;
  }
  toString() {
    let stringArr = ["null"];
    while (this.headNode) {
      // WHILE there is a head-Node...
      stringArr.unshift(`(${this.headNode.value}) ->`); // head-Node value added to front of string-array
      this.headNode = this.headNode.nextNode; // ...next-Node becomes head-Node
    }
    return stringArr.join(" ");
  }
}

const headNode = new Node("HeadNode");
const list = new LinkedList(headNode);
