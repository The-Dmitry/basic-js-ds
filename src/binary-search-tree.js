const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.head = null
  }

  root() {
    return this.head
  }

  add(data) {
    this.head = recursiveAdd(this.head, data)
    
    function recursiveAdd(node, data) {
      if(!node) { return new Node(data) }
      
      if(node.data === data) { return node }
      
      node.data > data ?
        node.left = recursiveAdd(node.left, data):
        node.right = recursiveAdd(node.right, data)
      
      return node
    }
  }

  has(data) {
    return recursiveSearch(this.head, data)

    function recursiveSearch(node, data) {
      if(!node) { return false }

      if(node.data === data) { return true }

      if(node.data > data) {
        return recursiveSearch(node.left, data)
      } else {
        return recursiveSearch(node.right, data)
      }
    }
  }

  find(data) {
    return recursiveFind(this.head, data)

    function recursiveFind(node, data) {
      if(!node) { return null }

      if(node.data === data) { return node }

      if(node.data > data) {
        return recursiveFind(node.left, data)
      } else {
        return recursiveFind(node.right, data)
      }
    }
    
  }

  remove(data) {
    this.head = recursiveRemove(this.head, data)

    function recursiveRemove(node, data) {
      if(!node) { return null }

      if(node.data > data) {
        node.left = recursiveRemove(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = recursiveRemove(node.right, data)
        return node
      } else {
        if(!node.left && !node.right) {
          return null
        }

        if(!node.left) {
          node = node.right
          return node
        }
        if(!node.right) {
          node = node.left
          return node
        }

        let minRight = node.right
        while(minRight.left) {
          minRight = minRight.left
        }

        node.data = minRight.data
        node.right = recursiveRemove(node.right, minRight.data)
        return node
      }
    }
  }

  min() {
    if(!this.head) {
      return null
    }

    let current = this.head
    while(current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    if(!this.head) {
      return null
    }
    
    let current = this.head
    while(current.right) {
      current = current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};