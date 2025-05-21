class Node {
  constructor(valor) {
    this.valor = valor;
    this.anterior = null;
    this.proximo = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = -1;
  }

  addFirst(valor) {
    let node = new Node(valor);
    
    
    if(this.head) {
      node.proximo = this.head;
      this.head.anterior = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.head = node;
    this.length++;
  }

  addLast(valor) {
    let node = new Node(valor);

    if(!this.head) {
      this.head = node;
      this.tail = node;
      return;
    } else {
      this.tail.proximo = node;
      node.anterior = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  addPos(indice, valor) {
    if(indice < -1 || indice > this.length) throw RangeError("Índice está fora dos limites!");
    if(indice === -1) return this.addFirst(valor);
    if(indice === this.length) return this.addLast(valor);
    
    let atual = this.head;

    for(let i = 0; i < indice; i++) {
      atual = atual.proximo;
    }

    let node = new Node(valor);
    let noAnterior = atual.anterior;

    noAnterior.proximo = node;
    node.anterior = noAnterior;
    node.proximo = atual;
    atual.anterior = node;

    this.length++;
  }

  removePos(indice) {
    if(indice < -1 || indice > this.length) throw RangeError("Índice está fora dos limites!");
    if(indice === -1) return console.log("Lista está vazia");
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    } else if(indice === 0) {
      let second = this.head.proximo;
      second.anterior = null;
      this.head = second;
    } else if(indice === this.length) {
      let last = this.tail.anterior;
      this.tail = last;
      this.tail.proximo = null;
    } else {
      let atual = this.head;

      for(let i = 0; i < indice; i++) {
        atual = atual.proximo;
      }
      
      atual.anterior.proximo = atual.proximo;
      atual.proximo.anterior = atual.anterior;
    }
    this.length--;
  }

  getLength() {
    return this.length;
  }

  printFront() {
    let atual = this.head;
    let str = "";
    while(atual) {
      str += atual.valor + "->";
      atual = atual.proximo;
    }
    str += "null"
    console.log(str)
  }

  printBack() {
    let atual = this.tail;
    let str = "";
    while(atual) {
      str += atual.valor + "->";
      atual = atual.anterior;
    }
    str += "null"
    console.log(str)
  }
}

let lista = new DoublyLinkedList();
lista.addFirst(10);
lista.addFirst(20);
lista.addFirst(120);
lista.addFirst(1);
lista.addLast(2);
lista.addLast(40);
lista.addPos(3, 50);
lista.removePos(0);
lista.removePos(3);

console.log(lista.getLength());
lista.printFront();
lista.printBack();