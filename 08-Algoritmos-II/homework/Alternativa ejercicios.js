// Alternativa segundo ejercicio:

function mergeSort(array) {//code review
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array

  const half = Math.floor(array.length/2)
  let left = array.slice(0, half)
  let right = array.slice(half, array.length)

  array = []

  left = mergeSort(left)
  right = mergeSort(right)

  while(left.length && right.length) {
    //mientras posea elementos en cada array
    if(left[0] < right[0]) {
      array.push(left.shift())
    }
    else {
      array.push(right.shift())
    }
  }
  array = array.concat(left, rigth)
  return array

}
//-------------------------------------------------------------------------------------------------
function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let arr = [];
    let mid = Math.round(array.length/2);
  
    let left = array.slice(0,mid);
    let right = array.slice(mid,array.length);
  
    if(left.length > 1){ left = mergeSort(left)}
    if(right.length > 1){ right = mergeSort(right)}
    
    while(true){
      if(left.length === 0){ arr = [...arr, ...right]; return arr;}   // PREGUNTAR PORQUE NO FUNCIONA EL arr.content(right)
      if(right.length === 0){ arr = [...arr, ...left]; return arr;}
      if(left[0] < right[0]){ arr.push(left.shift(0)); }
                        else{ arr.push(right.shift(0)); }
    }
  }