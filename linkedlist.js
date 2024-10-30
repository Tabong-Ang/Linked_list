export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.listSize = 0;
  }

  append(value) {
    const node = new Node(value);

    if (this.listSize === 0) {
      this.headNode = node;
      this.tailNode = node;
      this.listSize++;
    } else if (this.listSize === 1) {
      this.headNode.nextNode = node;
      this.tailNode = node;
      this.listSize++;
    } else {
      this.tailNode.nextNode = node;
      this.tailNode = node;
      this.listSize++;
    }
  }

  prepend(value) {
    if (this.listSize == 0) {
      const node = new Node(value, null);

      this.headNode = node;
      this.tailNode = node;
      this.listSize++;
    } else if (this.listSize >= 1) {
      const node = new Node(value, this.headNode);

      this.headNode = node;
      this.listSize++;
    }
  }

  size() {
    return this.listSize;
  }

  head() {
    return this.headNode.value;
  }

  tail() {
    return this.tailNode.value;
  }

  at(index) {
    if (index + 1 > this.listSize) {
      return "Not in context";
    }

    let count = 0,
      currentNode = this.headNode;

    while (count !== index) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return currentNode;
  }

  pop() {
    this.tailNode = this.at(this.listSize - 2);
    this.tailNode.nextNode = null;
    this.listSize--;
  }

  contains(value) {
    let currentNode = this.headNode;

    while (currentNode.value !== value && currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.value === value ? true : false;
  }

  find(value) {
    let count = 0,
      currentNode = this.headNode;

    while (currentNode.value !== value && currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return currentNode.value === value ? count : -1;
  }

  toString() {
    let listString = "",
      currentNode = this.headNode,
      count = 1;

    while (count <= this.listSize) {
      listString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
      count++;
    }
    return (listString += "null");
  }

  insertAt(value, index) {
    if (index == 0) {
      this.prepend(value);
    } else if (index > this.listSize - 1) {
      return "Not in context";
    } else {
      const currentNodeBeforeValue = this.at(index - 1);
      const currentNodeAtValue = this.at(index);

      const node = new Node(value, currentNodeAtValue);
      currentNodeBeforeValue.nextNode = node;
      this.listSize++;
    }
  }

  removeAt(index) {
    if (index == 0) {
      this.headNode = this.headNode.nextNode;
      this.listSize--;
    } else if (index == this.listSize - 1) {
      this.pop();
    } else if (index > this.listSize - 1) {
      return "Index out of bounds";
    } else {
      const currentNodeBeforeValue = this.at(index - 1);
      const currentNodeAfterValue = this.at(index + 1);

      currentNodeBeforeValue.nextNode = currentNodeAfterValue;
      this.listSize--;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}


