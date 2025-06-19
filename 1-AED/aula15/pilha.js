class Node {
    constructor(valor) {
      this.valor = valor;
      this.next = null;
    }
}

class Stack { // LIFO - Last In First Out
    constructor() {
        this.top = null;
    }

    push(valor) {
        let node = new Node(valor);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        if (this.isEmpty()) return null;

        let poppedValue = this.top.valor;
        this.top = this.top.next;
        return poppedValue;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.top.valor;
        }
        return null;
    }

    isEmpty() {
        return this.top === null;
    }
}

let pilha = new Stack();
pilha.push(10);
pilha.push(20);
pilha.push(30);
console.log(pilha.peek());
console.log(pilha.pop());
pilha.pop();
pilha.pop();
if(pilha.isEmpty()) {
    console.log("Pilha vazia");
}