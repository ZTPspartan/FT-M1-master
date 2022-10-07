'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var resultado = [1];
  for (var i = 2; i < num+1; i++) {
    if (num % i === 0) {
      resultado.push(i);
      num/=i;
      i-=1;
    }
  }
  return resultado;
  /*
  var resultado = [1];
    var divirsor = 2;
    while (num > 1){
      if(num%divirsor==0){
        resultado.push(divirsor);
        num/=divirsor
      }
      else{
        divirsor++
      }
    }
    return resultado;
  */
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-i; j++) {
      if(array[j]>array[j+1]){  //? si el array actual es mayor al array de adelante entonces
        aux=array[j+1]          //*usamos una variable auxiliar para guardar el array de adelante    
        array[j+1]=array[j]     //*cambiamos el valor del array de adelante con el array actual 
        array[j]=aux            //*cambiamos el valor del array actual con el valor auxiliar
      }
    }
  }
  return array
  
  /*
  for(let i = 0; i < array.length; i++){
    let j = i-1;
    let aux = array[i];
    while(j >= 0 && aux < array[j]){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = aux;
  }
    return array; 
  */
 /*
 var huboCambio =true;
  while(huboCambio){
    huboCambio=false
    for (let i = 0; i < array.length; i++) {
      if(array[i]>array[i+1]){
        let aux = array[i]
        array[i]=array[i+1]
        array[i+1]=aux
        huboCambio =true;
      }
    }
  }
  return array
 */
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let guardar=[]
  let j=0;
  for (let i = 0; i < array.length; i++) {
    if(array[i-1] && array[i-1]>array[i]){//? si existe un array anterior y array anterior es mayor al actual
      guardar=array[i]                    //* guardamos el array actual en una variable
      j=i                                 //* guardamos el indice actual maximo en J
      while(array[j-1]>array[j]){         //? mientras el array anterior al actual es mayor al array actual/ corre del actual hasta 0  
        array[j]=array[j-1]               //* guardamos en el array actual el array anterior
        array[j-1]=guardar;               //* guardamos en el array anterior el array que actual 
        j--                               //* restamos a la variable j para poder seguir validando hasta llegar al inicio 
      }
    }
  }
  return array
  /*
  for (let i = 0; i < array.length; i++) {
    let j=i-1
    let aux = array[i]
    while(j >=0 && array[j]>aux){
      array[j+1]=array[j]
      j--
    }
    array[j+1]=aux
  }
  return array
  */
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i= 0; i < array.length; ++i){
    var min = i;
    for (var j = i+1; j < array.length; ++j){
        if (array[min] > array[j]){
          min = j;
        }
    } 
    /*
    if(min!==i){
      var aux = array[min];
      array[min] = array[i];
      array[i] = aux; 
    }
    */
    var aux = array[min];
    array[min] = array[i];
    array[i] = aux;  
  }
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
