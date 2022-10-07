'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n > -1 && n < 2){  //? si n es 0 o 1 
    return 1            //* retorna 1
  }else if(n < 0){      //? si n es menor a 0(n negativo) 
    return 0            //* retorna 0
  }
  return n * nFactorial( n - 1 ); //todo: sino multiplicara n con un factorial n-1
}
/*
 ! nFactorial(5) = 5 * nFactorial(5-1) => prioriza nFactorial(4)
 ! nFactorial(4) = 4 * nFactorial(4-1) => prioriza nFactorial(3)
 ! nFactorial(3) = 3 * nFactorial(3-1) => prioriza nFactorial(2)
 ! nFactorial(2) = 2 * nFactorial(2-1) => prioriza nFactorial(1)
 Todo: nFactorial(1) = retorna 1 => regresa el numero 1 al nFactorial(2)
 ? nFactorial(2) = 2 * 1 = 2 regresa el numero al nFactorial(3)
 ? nFactorial(3) = 3 * 2 = 6 regresa el numero al nFactorial(4)
 ? nFactorial(4) = 4 * 6 = 24 regresa el numero al nFactorial(5)
 todo: nFactorial(5) = 5 * 24 = 120 dando como resultado
*/

function nFibonacci(n) {
  if(n>1){                                      //? si n es mayor a 1
    return nFibonacci(n-1) + nFibonacci(n-2)    //* retorna nFibonacci(n-1) + nFibonacci(n-2)
  }else if(n==1){                               //? si n es igual a 1
    return 1                                    //* retorna 1
  }else if(n==0){                               //? si n es igual a 0
    return 0                                    //* retorna 0
  }else{                                        //? si hay negativos o letras
    return -1                                   //* retorna -1
  } 
}

/*
  * nFibonacci(7)= nFibonacci(7-1) + nFibonacci(7-2) => nFibonacci(6) + nFibonacci(5)
 
    ? nFibonacci(6)= nFibonacci(6-1) + nFibonacci(6-2) => nFibonacci(5) + nFibonacci(4)
      ! nFibonacci(5)= nFibonacci(5-1) + nFibonacci(5-2) => nFibonacci(4) + nFibonacci(3)
          nFibonacci(4)= nFibonacci(4-1) + nFibonacci(4-2) => nFibonacci(3) + nFibonacci(2)
            * nFibonacci(3)= nFibonacci(3-1) + nFibonacci(3-2) => nFibonacci(2) + nFibonacci(1)
              ? nFibonacci(2)= nFibonacci(2-1) + nFibonacci(2-2) => nFibonacci(1) + nFibonacci(0)
                todo: nFibonacci(1)= 1
                todo: nFibonacci(0)= 0
              todo: nFibonacci(1)= 1  
            * nFibonacci(2)= nFibonacci(2-1) + nFibonacci(2-2) => nFibonacci(1) + nFibonacci(0)
              todo: nFibonacci(1)= 1
              todo: nFibonacci(0)= 0
          nFibonacci(3)= nFibonacci(3-1) + nFibonacci(3-2) => nFibonacci(2) + nFibonacci(1)
            * nFibonacci(2)= nFibonacci(2-1) + nFibonacci(2-2) => nFibonacci(1) + nFibonacci(0)
              todo: nFibonacci(1)= 1
              todo: nFibonacci(0)= 0
            todo: nFibonacci(1)= 1
      ! nFibonacci(4)= nFibonacci(4-1) + nFibonacci(4-2) => nFibonacci(3) + nFibonacci(2)
          nFibonacci(3)= nFibonacci(3-1) + nFibonacci(3-2) => nFibonacci(2) + nFibonacci(1)
            * nFibonacci(2)= nFibonacci(2-1) + nFibonacci(2-2) => nFibonacci(1) + nFibonacci(0)
              todo: nFibonacci(1)= 1
              todo: nFibonacci(0)= 0
            todo: nFibonacci(1)= 1
    ? nFibonacci(5)= nFibonacci(5-1) + nFibonacci(5-2) => nFibonacci(4) + nFibonacci(3)     
      todo: Resumen nFibonacci(5)= 6

*/

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
class Queue{
  constructor(){
    this.array=[];                  // * creamos un array vacio como el corazon de tu ex 
  }
  enqueue(value){                   //* este metodo recibe un valor
    return this.array.push(value);  //! añade el valor al final del array
  }
  dequeue(){                         
    return this.array.shift();      //! toma el valor del primer array y lo borra de paso  
  }
   size(){
    return this.array.length;       //! retorna el tamaño del array
  }
} 

//! =============================== Funciona Igual
/*
function Queue() {
  this.array = []
  this.enqueue = function(a){
   return this.array.push(a);
  }
  this.dequeue = function(){
   return this.array.shift();

  }
  this.size = function(){
    return this.array.length
  }
}
*/
//!===============================
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
