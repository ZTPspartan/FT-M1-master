function List() {
    this._length = 0;
    this.head = null;
}

function Node(data) {
    this.data = data;
    this.next = null;
}


List.prototype.add = function(data) {
    var node = new Node(data);
    var current = this.head;
    // Si está vacia
    if (!current) { // current === null
        this.head = node;
        this._length++;
        return node;
    }
    // Si no esta vacia, recorro hasta encontrar el último
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
};
    
List.prototype.getAll = function(){
    current = this.head //empezamos en la cabeza
    if(!current){
        console.log('La lista esta vacia!')
        return
    }
    while(current){
        console.log(current.data);
        current = current.next;
    }
    return
};

var lista= new List();
console.log(lista);
lista.add("Maria")
console.log(lista);
lista.add("Leo")
console.log(lista);
lista.add("Fraz")
console.log(lista);


//Hash table
buckects=[0,1,2,3,4,5]

var obj={
    color: "rojo",
    num: 1
}

function Hash(objeto){
    return objeto.color.length
}



console.log(Hash(obj));