class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(valor) {
    let node = new Node(valor);
    node.proximo = this.head;
    this.head = node;
  }

  print() {
    let atual = this.head;
    let str = "";
    while(atual) {
      str += atual.valor + "->";
      atual = atual.proximo;
    }
    str += "null"
    console.log(str)
  }
}

let lista = new LinkedList();
lista.addFirst(10);
lista.addFirst(20);
lista.addFirst(120);
lista.addFirst(1);

lista.print();
