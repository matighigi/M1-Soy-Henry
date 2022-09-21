'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
                    //num = 10
  let array = [1] //el array inicia con el 1 por que es primo de todos los numeros
  let div = 2
  while (num > 1) {  //acá entra
    if(num % div === 0) {  //10 % 2 = 0
      array.push(div) //array = [1, 2]
      num = num / div// num = 10 / 2 = 5
    }
    else {
      div++   //  2--->3
    }
  }
  return array 
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if (array[j] > array [j+1]){ 
        //si el array en posicion J es mayor que el siguiente
        let aux = array [j]
        //guardamos en un auxiliar el valor de J (que es mayor a J+1)
        array[j] = array [j+1]
        //en la posicion J transformamos su antiguo valor (mayor) por el de J + 1 (menor)
        array[j+1] = aux
        //en la posicion siguiente a J transformamos el antiguo valor (menor) por el del auxiliar (mayor, que era el anterior)
      }
    }
  }
  //realiza las iteraciones necesarias para terminar de ordenar el array de menor a mayor
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if (array[j] > array [j+1]) {
        //si el array en posicion J es mayor que el siguiente
        let aux = array [j+1]
        //guardamos en un auxiliar el valor J+1 (que es menor al anterior)
        array [j+1] = array[j]
        //suplantamos el valor de J+1 (menor) por el valor de J (mayor)
        array [j] = aux
        //suplantamos el valor de J (mayor) por el de J+1 (menor)
      }
    }
  }
  //realiza las iteracione necesarias para terminar de ordenar el array de menor a mayor
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++) {
    let min = i;
    for(let j = i+1; j < array.length; j++){
        if(array[j] < array[min]) {
          //si min+1 es menor al minimo
            min=j;
          //el nuevo minimo sera el valor encontrado en min+1
        }
     }
    if (min !== i) {
      //si el nuevo min es distinto a i(anterior minimo)
        let aux = array[i]; 
        //guardamos en un auxiliar el valor de i(anterior min)
        array[i] = array[min];
        //suplantamos el valor de i(anterior min) por el valor de min(nuevo minimo)
        array[min] = aux; 
        //suplantamos el valor de min (nuevo minimo) por el valor de i(anterior min)
    }
  }
  //realiza las iteracione necesarias para terminar de ordenar el array de menor a mayor
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
