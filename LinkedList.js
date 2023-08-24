// create LinkedList class which will represent the full list.
import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // if the list is empty, set head and tail to be newNode.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the list is not empty, update the current tail's next pointer
      // to point to the newNode, and update tail to new node.
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // if list empty, set head and tail to be newNode.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the list isn't empty, update the newNodes's next pointer to
      // point to the current head, and update the head to be the newNode.
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    // create count
    let count = 0;
    // define start condition
    let node = this.head;
    // while node is true, ie there are nodes
    while (node) {
      count++;
      node = node.nextNode;
    }
    console.log(`Counted ${count} nodes.`);
    return count;
  }

  getHead() {
    if (!this.head) {
      console.log(`No Head Node.`);
      return null;
    } else {
      console.log(this.head);
      return this.head;
    }
  }

  getTail() {
    if (!this.tail) {
      console.log(`No Tail Node.`);
      return null;
    } else {
      console.log(this.tail);
      return this.tail;
    }
  }

  at(index) {
    if (index < 0) {
      console.log(`Invalid index.`);
      return null;
    }
  
    // set start point
    let node = this.head;
    // set index count
    let count = 0;
  
    while (node) {
      if (count === index) {
        console.log(`Value at index ${index} is ${node.value}.`);
        return node.value;
      }
      count++;
      node = node.nextNode;
    }
  
    console.log(`Index out of bounds.`);
    return null;
  }
  
  pop() {
    // if list is empty, return null
    if (!this.head) {
      console.log(`Empty Linked List - No Nodes.`);
      return null;
    } else {
      // if the list had only 1 node (head / tail are the same)
      if (this.head === this.tail) {
        // set head and tail to null
        this.head = null;
        this.tail = null;
        return null;
      } else {
        // if the list has more than 1 node, find the node before the tail
        // set that node's next pointer to null, and set tail to that node.
        let node = this.head;
        while (node) {
          if (node.nextNode === this.tail) {
            this.tail.nextNode = null;
            this.tail = node;
            return null;
          } else {
            node = node.nextNode;
          }
        }
      }
    }
  }

  contains(value) {
    // define start condition
    let node = this.head;
    while (node) {
      if (node.value == value) {
        console.log(`${value} found inside Linked List.`);
        return true;
      }
      node = node.nextNode;
    }
    console.log(`${value} not found inside Linked List.`);
    return false;
  }

  find(value) {
    // define start condition
    let node = this.head;
    // set index count
    let count = 0;

    while (node) {
      if (node.value == value) {
        console.log(`${value} found at index ${count}.`);
        return count;
      } else {
        count++;
        node = node.nextNode;
      }
    }
    console.log(`${value} not found inside Linked List.`);
    return null;
  }

  toString() {
    // set start position
    let node = this.head;
    let string = "";

    while (node) {
      string += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    string += `null`;
    console.log(string);
  };

  insertAt(value, index) {
    // if index is 0, use prepend method
    if (index === 0) {
      this.prepend(value);
      return;
    }
    // if index is greater than the number of nodes, use append method
    if (index >= this.size()) {
      this.append(value);
      return;
    }
    // create new node
    const newNode = new Node(value);
    // set start position
    let node = this.head;
    // set index count
    let count = 0;

    while (node) {
      if (count === index - 1) {
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
        return;
      } else {
        count++;
        node = node.nextNode;
      }
    }
  };

  removeAt(index) {
    // if index is 0, set head to the next node
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    // if index is greater than the number of nodes, do nothing
    if (index >= this.size()) {
      return;
    }
    // set start position
    let node = this.head;
    // set index count
    let count = 0;

    while (node) {
      if (count === index - 1) {
        node.nextNode = node.nextNode.nextNode;
        return;
      } else {
        count++;
        node = node.nextNode;
      }
    }
  };
  
}

// Done!