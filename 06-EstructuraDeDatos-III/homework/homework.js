"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
//REVISAR PROFUNDAMENTE ESTE EJERCICIO, SOBRE TODO LOS ULTIMOS METODOS
function BinarySearchTree(value) {
  this.value = value //nodo raiz
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) {
    return 1
  } 

  if (this.left && !this.right) {
    return this.left.size() + 1
  } 

  if (!this.left && this.right) {
    return this.right.size() + 1
  } 

  if (this.left && this.right) {
    return this.left.size() + this.right.size() + 1
  }
  
}

BinarySearchTree.prototype.insert = function (v) {//code review
  if(v > this.value) {
    if(!this.right) {
      this.right = new BinarySearchTree(v)
    }
    else {
      this.right.insert(v) 
    }
  }

  if(v < this.value) {
    if(!this.left) {
      this.left = new BinarySearchTree(v)
    }
    else {
      this.left.insert(v)
    }
  }
}

BinarySearchTree.prototype.contains = function (value) {//code review
  if (value === this.value) {
    return true
  }

  if (value > this.value) {
    if(!this.right) {
      return false
    }
    else {
      return this.right.contains(value)
    }
  }

  if (value < this.value) {
    if(!this.left) {
      return false
    }
    else {
      return this.left.contains(value)
    }
  }
}
   
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if(order === "pre-order"){ 
    //root - izquierda - derecha
    cb(this.value);

    if(this.left) {
      this.left.depthFirstForEach(cb, order)
    }
    if(this.right) {
      this.right.depthFirstForEach(cb, order)
    }
  }
  else if (order === "post-order") {
    //izquierda - derecha - root
    if(this.left) {
      this.left.depthFirstForEach(cb, order)
    }
    if(this.right) {
      this.right.depthFirstForEach(cb, order)
    }

    cb(this.value)
  }
  else if (order === "in-order" || order == null) {
    //izquierda - root - derecha
    if(this.left){
      this.left.depthFirstForEach(cb, order)
    }
    cb(this.value)

    if(this.right){
      this.right.depthFirstForEach(cb, order)
    }
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]) {
  if(this.left){ 
    array.push(this.left); 
  }

  if(this.right){ 
    array.push(this.right); 
  }

  cb(this.value);

  if(array.length > 0){ 
    array.shift().breadthFirstForEach(cb, array); 
  }
}//REVISAR PROFUNDAMENTE ESTE EJERCICIO, SOBRE TODO LOS ULTIMOS METODOS

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
