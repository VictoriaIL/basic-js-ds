const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
   return this.root !== null ? this.root : null;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }

  }


  has(data ) {

  }

  find(data) {

  }

  remove(data) {


  }

  min(node = this.root){
    if (node.left) { return this.min(node.left)}
    else {
      return node.data
    }
  }

  max(node = this.root) {
    if (node.right) { return this.max(node.right)}
    else {
      return node.data;
    }
  }

}
