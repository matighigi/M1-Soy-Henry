const { BinarySearchTree } = require("./homework")

//Alternativas ejercicio:

BinarySearchTree.prototype.insert = function (v) {
  let nodo = new BinarySearchTree(v)

  if(v > this.value) {
    if(this.right !== null) {
      this.right.insert(v)
    }
    else {
      this.right = nodo
    }
  }

  if(v < this.value) {
    if(this.left !== null) {
      this.left.insert(v)
    }
    else {
      this.left = nodo
    }
  }
}
//----------------------------------------------------------------------
BinarySearchTree.prototype.contains = function (v) {
  if(this.value == v){
    return true;
  }

  if(this.value < v){
    if(this.right){
      return this.right.contains(v);
    } 
    else {
      return false;
    }
  } 

  else {
    if(this.left){
      return this.left.contains(v);
    } 
    else {
      return false;
    }
  }
} 
//----------------------------------------------------------------------

BinarySearchTree.prototype.contains = function (value) {
    if(this.value === value) {
      return true;
    }
    if(value < this.value) {
      if(this.left === null){
        return false
      }
      else{
        return this.left.contains(value)
      }
    }   
    if(value > this.value){
      if(this.right === null){
        return false
      }
      else{
        return this.right.contains(value)
      }
    }
  }    

  //-----------------------------------------------------------------------

  BinarySearchTree.prototype.size = function () {//code review
    if(!this.value) {
      return null
    }

    if(!this.right && !this.left) {
      return 1
    } 

    if(this.left && !this.right) {
      return 1 + this.left.size()
    }

    if(!this.left && this.right) {
      return 1 + this.right.size()
    }

    if(this.left && this.right) {
      return 1 + this.left.size() + this.right.size()
    }
  }

  //------------------------------------------------------------------------

  BinarySearchTree.prototype.size = function () {//code review
    let contador = 1
    if(this.left) {
      contador += this.left.size()
    }
    if(this.right) {
      contador += this.right.size()
    }

    return contador
  }
  //-------------------------------------------------------------------------

  BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {}
  //-----------------------------------------------------------------------------
  BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]) {}