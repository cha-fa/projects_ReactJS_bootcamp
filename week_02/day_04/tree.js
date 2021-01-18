class Node {
  constructor(data, leftChild, rightChild) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class Tree {
  constructor(root, array = [4, 2, 9, 5, 1, 8]) {
    this.root = root;
    this.array = array;
  }

  initializeTree() {
    this.array.forEach((item) => {
      this.insert(item);
    });
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(parentNode, newNode) {
    if (newNode.data < parentNode.data) {
      if (!parentNode.leftChild) {
        parentNode.leftChild = newNode;
      } else {
        this.insertNode(parentNode.leftChild, newNode);
      }
    } else {
      if (!parentNode.rightChild) {
        parentNode.rightChild = newNode;
      } else {
        this.insertNode(parentNode.rightChild, newNode);
      }
    }
  }

  find(node, data) {
    // if trees is empty return null
    if (node === null) {
     return null;
   }
    // if data is less than node's data
    // move left
    else if (data < node.data) {
      return this.find(node.leftChild, data);
    }
    // if data is less than node's data
    // move left
    else if (data > node.data) {
      return this.find(node.rightChild, data);
    }
    // if data is equal to the node data
    // return node
    else return node;
  }

  printPostOrder(node) {
    if (node) {
      console.log(node.data);
      this.printPostOrder(node.leftChild);
      this.printPostOrder(node.rightChild);
    }
  }
}

const tree = new Tree();
tree.initializeTree();
console.log(tree.find(tree.root, 5));
