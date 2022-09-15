//Alternativa ejercicio 2:
function nFibonacci(n) {                        
    if (n === 0) {
     return 0;
    }
    else if (n === 1) {
     return 1
    }
    return nFibonacci(n - 1) + nFibonacci (n - 2)
   }

//Alternativa ejercicio 3: (alternativa hecha a base de clase constructor)
class Queue {
    constructor() {
        this.Queue = []
    }
    enqueue(valor) {
       return this.Queue.push(valor)
    }
    dequeue() {
        if (this.Queue.length === 0) {
            return undefined;
        } else {
        return this.Queue.shift()
        }
    }
    size() {
        return this.Queue.length
    }
  }