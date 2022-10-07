"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
BinarySearchTree

function BinarySearchTree(value) {

  this.value = value
  this.left = null;
  this.right = null
}

BinarySearchTree.prototype.size = function () {
  //? si derecha no existe y izquierda no existe 
  if (!this.right && !this.left) return 1  //! mandamos 1
  //? si derecha no existe y izquierda existe
  if (this.right === null && this.left !== null) return 1 + this.left.size()  //! mandamos 1 + recurcion con la izquierda 
  //? si derecha existe y izquierda no existe
  if (this.right !== null && this.left === null) return 1 + this.right.size() //! mandamos 1 + recursion de derecha
  //? si derecha existe y izquierda existe
  if (this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size() //! mandamos 1 + recursion de derecha - izquierda

  //if (!this.right && !this.left) return 1
  //if (this.right && this.left) return 1 + this.right.size() + this.left.size()
  //if (this.right) return 1 + this.right.size()
  //if (this.left) return 1 + this.left.size()

}

BinarySearchTree.prototype.insert = function (value) {
  
  if (this.value > value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value)
    } else {
      this.left.insert(value)
    }
  } else if (this.value < value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value)
    } else {
      this.right.insert(value)
    }
  }
}

BinarySearchTree.prototype.contains = function (Bvalor) {

  //? si el valor es igual al que buscamos
  if (this.value === Bvalor) {
    return true;                      //!retornamos true
  }
  //? si no existe izquierda o derecha 
  else if (!this.left && !this.right) {
    return false;                     //!retornamos False
  }
  else {
    //?vemos si el Bvalor es menor al valor actual
    if (this.value > Bvalor) {
      if (this.left) {
        return this.left.contains(Bvalor)
      }
      return false
      //?vemos si el Bvalor es mayor al valor actual
    } else if (this.value < Bvalor) {
      if (this.right) {
        return this.right.contains(Bvalor)
      }
      return false
    }
  }

  //if(this.value== Bvalor) return true;
  //if(Bvalor>this.value){
  //  if(!this.right)return false;
  //  else{
  //    return this.right.contains(Bvalor)
  //  }
  //}
  //if(Bvalor<this.value){
  //  if(!this.left)return false;
  //  else{
  //    return this.left.contains(Bvalor)
  //  }
  //}
}

BinarySearchTree.prototype.depthFirstForEach = function (array,parametro) {
  //if (typeof parametro != "string") { throw new TypeError("Parametro must be strings"); }
  // "post-order", "pre-order", o "in-order"

  // root - izq - der
  if (parametro === "pre-order") {
    array(this.value)
    if (this.left) this.left.depthFirstForEach(array, parametro)
    if (this.right) this.right.depthFirstForEach(array, parametro)
  }
  // izq - der - root
  else if (parametro === "post-order") {
    if (this.left) this.left.depthFirstForEach(array, parametro)
    if (this.right) this.right.depthFirstForEach(array, parametro)
    array(this.value)
  }
  else{ //"in-order"
    // izq - root - der 
    if (this.left) this.left.depthFirstForEach(array, parametro)
    array(this.value)
    if (this.right) this.right.depthFirstForEach(array, parametro)
  }
}
// pre-order --> root - izq - der
// --> [papa, piña, kiwi]
// post-order --> izq - der - root
// --> [piña, kiwi, papa]
// in-order --> izq - root - der
// --> [piña, banana, papa, kiwi]
//breadthFirstForEach [apple,banana,mango,limon] por niveles
//                 papa                         nivel 0
//          /               \
//       piña                 kiwi              nivel1
//     /      \             /      \
//   apple    banana     mango     limon        nivel2

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  // si tiene ramas
  cb(this.value) 
  if (this.left !== null) {
    array.push(this.left) //[piña] // 2 [apple]
  }
  if (this.right !== null) {
    array.push(this.right) //[piña, kiwi] // 2 [apple, banana]
  }
  if(array.length>0){
    array.shift().breadthFirstForEach(cb, array)
  }
  //1 [piña, kiwi] // 2 [apple, banana]
// papa // 

  //while (array.length > 0) {
  //  array.shift().breadthFirstForEach(cb, array)
  //} return array
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};


/*
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
 
}
BinarySearchTree.prototype.insert = function (value) {
  //recibe un value, crea un nodo y lo inserta en la posicion correspondiente¿?
  // chequear si el value es mayor o menor que el value del nodo
  
  if(value > this.value){
    if(this.right !== null){// la rama esta vacia
      
      this.right.insert(value)
    } else{// ocupada la rama
      
      this.right = new BinarySearchTree(value)
    }
  }

  if(value < this.value){
    if(this.left !== null){
      this.left.insert(value)
    } else {
      this.left = new BinarySearchTree(value)
    }
  }

}
BinarySearchTree.prototype.size = function () {
  // contar la cantidad de nodos
  // si right y left === null --> 1
  if(!this.right && !this.left) return 1

  if(this.right === null && this.left !== null) return 1 + this.left.size()

  if(this.right !== null && this.left === null) return 1 + this.right.size()

  if(this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size()

}
BinarySearchTree.prototype.contains = function (value) {
  // recorrerlo
  if (value === this.value) return true

  if(value < this.value){
    if(!this.left) return false
    else {
      return this.left.contains(value)
    }
  } 
  if(value > this.value) {
    if(!this.right) return false
    else {
      return this.right.contains(value)
    } 
  }
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  // "post-order", "pre-order", o "in-order"

  // root - izq - der
  if(order === "pre-order"){
    cb(this.value)
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }
  // izq - der - root
  else if(order === "post-order") { 
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
  else { //"in-order"
    if(this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }
}
// pre-order --> root - izq - der
// --> [papa, piña, kiwi]
// post-order --> izq - der - root
// --> [piña, kiwi, papa]
// in-order --> izq - root - der
// --> [piña, banana, papa, kiwi]
//breadthFirstForEach [apple,banana,mango,limon] por niveles
//                 papa                         nivel 0
//          /               \
//       piña                 kiwi              nivel1
//     /      \             /      \
//   apple    banana     mango     limon        nivel2
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]) {
  // si tiene ramas
  
  if(this.left !== null){
    array.push(this.left) //[piña] // 2 [apple]
  }
  if(this.right !== null){
    array.push(this.right) //[piña, kiwi] // 2 [apple, banana]
  }
  //1 [piña, kiwi] // 2 [apple, banana]
  cb(this.value) // papa // 
  while(array.length > 0){
 
    array.shift()
  // piña
    .breadthFirstForEach(cb, array)
    
  }return array
}
// papa - piña
let tree=new BinarySearchTree(20);
tree.insert(15);
tree.insert(25);
tree.insert(5);
tree.insert(17);
tree.insert(21);
tree.insert(28);
tree.insert(0);
tree.insert(14);
tree.insert(50);
tree.insert(1);
tree.insert(45);
tree.insert(13);
tree.insert(12);
tree.insert(11);
tree.insert(30);
tree.insert(35);
tree.insert(33);
tree.insert(31);
tree.insert(34);
let testArr=[]


 console.log(tree)
 console.log(tree.contains(21))
 
 
 console.log(tree.size())
 console.log(tree.breadthFirstForEach(function(val){ testArr.push(val); } ))
 console.log(testArr)
 testArr=[]
 console.log(tree.depthFirstForEach(function(val){ testArr.push(val); }, 'post-order'));
 console.log(testArr)
 testArr=[]
 tree.depthFirstForEach(function(val){ testArr.push(val); }, 'pre-order');
 console.log(testArr)
 testArr=[]
tree.depthFirstForEach(function(val){ testArr.push(val); }, 'in-order');
 console.log(testArr)

*/