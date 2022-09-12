'use strict'

function BinarioADecimal(num) {          // ejemp arr = [0, 1, 1, 0] 
  // tu codigo aca
  var nuevoArray = num.split("")
  var suma = 0
  var posicion = nuevoArray.length - 1
  for(var i = 0; i < nuevoArray.length; i++) {
    suma = suma + nuevoArray[i] * 2 ** posicion
    // es lo mismo que hacer sum+=
    posicion-- //es lo mismo que hacer posicion = posicion - 1
  } 
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
var nuevoArray = [];
while (num !== 0) {                    //mientras num no sea = 0
  nuevoArray.unshift(num%2)            //agregamos los restos de atras para delante
  num = Math.floor(num/2)
}
return nuevoArray.join ("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}