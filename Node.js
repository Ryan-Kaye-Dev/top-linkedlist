// create Node class which will represent each node in the list.

export default class Node {
    // note the default value of nextNode is null.
    constructor(value, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  