'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) {
    //caso base
    //si la longitud del array es de un elemento o menos
    return array
  }
  let pivot = Math.floor(Math.random()*array.length) 
  //el pivot será una posicion aleatoria de algun elemento perteneciente al array 
  let left = []
  let right = []
  let equals = []
  //creamos los arrays left y right para guardar valores menores y mayores respectivamente, y el array equals para guardar los iguales
  for(let i = 0; i < array.length; i++) {
    if(i !== pivot) {
      //si la posicion i es distinta de la posicion de pivot
      if(array[i] < array[pivot]) {
        left.push(array[i])
        //si el elemento en la posicion i es menor al elemento en la posicion de pivot, pushear dicho elemento en el array left 
      }
      else {
        right.push(array[i])
        //si el elemento en la posicion i es mayor al elemento en la posicion de pivot, pushear dicho elemento en el array right
      }
    }
    else {
      equals.push(array[i])
    }
  }
  let nuevoArray = quickSort(left).concat(equals).concat(quickSort(right))//declaramos este nuevoArray o direcamente lo hacemos con return
  //aplicamos recursividad invocando a la misma funcion "quickSort" para los arrays left y right respectivamente
  //posterior a lo anteriormente mencionado, aplicamos el metodo .concat para concatenar en orden el array left, el array equals y el array right para poseerlos, ahora si, ordenados
  return nuevoArray
}

//----------------------------------------------------------------------------------------------------------------------------
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) {
    //si la longitud del array es de un elemento o menos
    return array
  }
  let centr = Math.floor(array.length/2) 
  //esta variable nos permite tomar la longitud del array y dividirlo en dos 
  let left = array.slice(0, centr)
  //left nos agrupa la primera mitad del array en un nuevo array
  let right = array.slice(centr)// al metodo slice si no le pasamos(como en este caso)un limite final, el limite va a ser el ultimo elemento del array incluido
  //right nos agrupa la segunda mitad del array en un nuevo array
  
  function concatenación (left, right) { //se crea una función que trabaje con los arrays left y right 
    let nuevoArray = []
    //se crea un nuevo array en donde se van a pushear los valores
    while(left.length > 0 && right.length > 0) {//es lo mismo que poner While (left.length && right.length)
      //mientras haya elementos en left right
      if(left[0] < right[0]) {
        //si el valor en posicion 0 de left es menor al de right
        nuevoArray.push(left.shift())
        //pusheamos en el nuevo array el valor de left[0] y lo eliminamos del array de left
      }
      else {
        nuevoArray.push(right.shift())
        //pusheamos en el nuevo array el valor de right[0] y lo eliminamos del array de right
      }
    }
    return nuevoArray.concat(left).concat(right)
    //retornamos el nuevoArray concatenado con algun posible valor restante dentro de left o right
  }
  return concatenación(mergeSort(left), mergeSort(right))
  //retornamos el llamado a función
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
