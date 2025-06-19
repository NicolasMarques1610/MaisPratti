class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
class Queue { // FIFO - First In First Out
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }

    enqueue(value) {
        let node = new Node(value);
        if(this.rear) {
            this.rear.next = node;
        }

        this.rear = node;
        if(!this.front) {
            this.front = node;
        }

        this.size++;
    }

    dequeue() {
        if(!this.front || !this.rear) {
            return null;
        }
        if(this.front === this.rear) {
            let value = this.front.value;
            this.rear = null;
            this.front = null;
            this.size--;
            return value;
        }

        let value = this.front.value;
        this.front = this.front.next;
        this.size--;
        return value;
    }
}

let fila = new Queue();
fila.enqueue("Ana");
fila.enqueue("Carlos");
console.log(fila.dequeue());
console.log(fila.dequeue());
console.log(fila.dequeue());