//Alternativa ejercicio 2 :

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let swap = true

    while (swap) {//acá está en true
        swap = false
        //acá está en false
        for (let i = 0; i < array.length; i++) {
            if(array[i] > array[i + 1]) {
                let aux = array [i]
                array [i] = array [i+1]
                array [i+1] = aux
                swap = true
            }
        }
    }
    return array
  }

//Alternativa ejercicio 3:
function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for(let i = 1; i < array.length; i++) {
        //empieza en posicion 1
        let j = i - 1
        //j es posicion 0
        let aux = array[i]
        //guardamos en un auxiliar el valor de la posicion 1

        while (j >= 0 && aux < array[j]) {
            //mientras j sea mayor o igual a 0, y el valor en posicion 1 sea menor al de posicion 0
             array [j+1] = array[j]
             //suplantamos valor de la posicion 1 por el de la 0
             j--
             //J decrece
        }
        array[j + 1] = aux
        //suplantamos valor de la posicion 1 por el del auxiliar
    }
    //se realizan todas las iteraciones
    return array
  }
