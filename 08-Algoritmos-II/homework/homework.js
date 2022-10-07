'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <=1) return array 
  let pivot = array[0];
  let left = []; 
  let right = [];

  for (var i = 1; i < array.length; i++) {
    
    if(array[i] < pivot){
      left.push(array[i])
    }
    if(array[i] >= pivot){
      right.push(array[i])
    }
  }      
  return quickSort(left).concat(pivot, quickSort(right));
  /*
  return array.sort(function(a,b){
    return a-b
  });
  array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  */
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){return array;}
  let div = Math.floor(array.length/2)
  let left = array.slice(0,div)
  let right = array.slice(div)
  return merge(mergeSort(left),mergeSort(right))
  //todo: o puedes quitar el retun y usar esta parte
  // let arr=[]
  // left= mergeSort(left)
  // right= mergeSort(right)

  // while (left.length && right.length){
  //   if(left[0]<right[0]){
  //     arr.push(left.shift())
  //   }
  //   else{
  //     arr.push(right.shift())
  //   }
  // }
  // arr=arr.concat(left,right)
  // return arr
}

function merge(left, right){
  let LIndex=0
  let RIndex=0
  let array=[]
  while(LIndex<left.length && RIndex<right.length){
    if(left[LIndex]<right[RIndex]){
      array.push(left[LIndex])
      LIndex++
    }else{
      array.push(right[RIndex])
      RIndex++
    }
  }
  return array.concat(left.slice(LIndex)).concat(right.slice(RIndex))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
