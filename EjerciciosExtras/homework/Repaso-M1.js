const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
        //si el elemento dentro de array es otro array    
            sum += countArray(array[i]);
            //suma la recursion de la misma función
        }
        else {
            sum += array[i];
            //sumar normalmente cada valor
        }
    }
    return sum;
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {//puede usarse object.keys
    // Tu código aca: 
    let counter = 0

    for(let prop in obj) {
        counter++
        //incrementa el contador ya que encuentra propiedad
        if(typeof obj[prop] === "object" ) {//(****)typeof de un array tambien lo toma como objeto entonces creamos el otro condicional para asegurarnos que no es un array
            //si la propiedad de obj es otro objeto
            if(!Array.isArray(obj[prop])) {
                //si no es un array (****)
                counter += countProps(obj[prop])
                //al cumplirse hacemos recursion aplicando nuevamente la funcion para verificar si encontramos nuevas propiedades dentro 
            }
        }
    }
    return counter
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    let counter = 0
    let current = this.head

    while(current) {
        //mientras exista un this.head
        if(isNaN(Number(current.value))) {
        //si no es un numero    
            counter++
            //aumentamos contador
            current.value = "Kiricocho"
            //cambiamos el valor a "Kiricocho"
        }
        current = current.next
        //sino seguimos recorriendo la lista
    }
    return counter
    //retornamos el contador
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    let queue = new Queue();
    //en DS ya está creada la instancia de las Queue
    while(queueOne.size() || queueTwo.size()) {
    //si existen elementos     
        let firstElement = queueOne.dequeue();
        let secondElement = queueTwo.dequeue();
        //extraemos elementos

        if(firstElement){ 
        //si existen elementos en firstElement
            queue.enqueue(firstElement)
            //asignamos los elementos a queue
        }
        if(secondElement) {
        //si existen elementos en secondElement    
            queue.enqueue(secondElement)
            //asignamos los elementos a queue
        }
    }
    return queue;
}



// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function(num) {
    //retornamos funcion por que es clousures, con un num de parametro    
        return num * multiplier
        //operamos ese numero con el multiplicador
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    //la suma está definida en el DS
    if(!this.right && !this.left) return this.value;
    //si no hay valores en el right y left devolver el valor del root
    if(!this.right && this.left) return this.value + this.left.sum();
    //si no hay valores en el right devolver la suma del root y left
    if(this.right && !this.left) return this.value + this.right.sum();
    //si no hay valores en el left devolver la suma del root y right
    if(this.right && this.left) return this.value + this.right.sum() + this.left.sum();
    //si hay elementosm delvolver la suma del root, de right y left
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}