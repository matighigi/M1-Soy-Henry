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

function BinarySearchTree(value) {
  this.value = value //nodo raiz
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) {
    return 1
  } 
  else if (this.left && !this.right) {
    return this.left.size() + 1
  } 
  else if (!this.left && this.right) {
    return this.right.size() + 1
  } 
  else {
    return this.left.size() + this.right.size() + 1
  }
}
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
  //falta parte del codigoooo
BinarySearchTree.prototype.breadthFirstForEach = function () {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
