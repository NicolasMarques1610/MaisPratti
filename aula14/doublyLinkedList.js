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
  }

  addFirst(valor) { // 10 / 20
    let node = new Node(valor);
    node.proximo = this.head; // null / {10,null,null}
    if(!this.head) {
      this.tail = node;
    }
    if(this.head) { // false / true
      this.head.anterior = node; // {10,{20,null,{10,null,null}},null}
    }
    this.head = node; // {10, null, null} / {20,null,{10,null,null}}
  }

  addLast(valor) {
    let node = new Node(valor);

    if(!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.proximo = node;
    node.anterior = this.tail;
    this.tail = node;
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

lista.printFront();
lista.printBack();