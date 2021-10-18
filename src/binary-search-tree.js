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

    has(data) {
        let found = false,
            current = this.root


        while (!found && current) {

            if (data < current.data) {
                current = current.left;

            } else if (data > current.data) {
                current = current.right;

            } else {
                found = true;
            }
        }

        return found;
    }


    find(data) {
        let found = false,
            current = this.root

        while (!found && current) {


            if (data < current.data) {
                current = current.left;

            } else if (data > current.data) {
                current = current.right;


            } else {
                return current.data;
            }
        }
        return null;
    }

    remove(data, node) {
        if (!node) {
            node = this.root;
        }
        if (data < node.data) {
            node.left = this.remove(data, node.left);
        } else if (data > node.data) {
            node.right = this.remove(data, node.right);
        } else {

            if (node.left != null && node.right != null) {
                let minInRightSubTree = this.min(node.right);
                node.data = minInRightSubTree;
                node.right = this.remove(minInRightSubTree, node.right);
            } else {
                if (node.left == null && node.right == null) {
                    node = null;
                } else {
                    let deleteNode = node;
                    node = (node.left != null) ? (node.left) : (node.right);
                    deleteNode = null;
                }
            }
        }
        return node;
    }

    min(node = this.root) {
        if (node.left) {
            return this.min(node.left)
        } else {
            return node.data
        }
    }

    max(node = this.root) {
        if (node.right) {
            return this.max(node.right)
        } else {
            return node.data;
        }
    }

}
