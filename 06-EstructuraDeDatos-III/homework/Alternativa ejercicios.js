//Alternativas ejercicio:
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