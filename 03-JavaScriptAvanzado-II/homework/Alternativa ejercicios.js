//Alternativa ejercicio 2:

let cache = {} 
  return function(value){
    return cache.hasOwnProperty(value) ?  cache[value] : cache[value] = cb(value)
  }