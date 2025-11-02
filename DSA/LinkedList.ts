class node<T> {
  data: T;
  next: node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: node<T> | null;

  constructor() {
    this.head = null;
  }

  addAtHead(data: T): void {
    if (this.head == null) {
      this.head = new node(data);
      return;
    }

    let newNode: node<T> = new node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  display(): void {
    let temp: node<T> | null = this.head;
    let resultString = "";

    while (temp != null) {
      resultString += temp.data + " -> ";
      temp = temp.next;
    }

    resultString += "null";
    console.log(resultString);
  }
}

let ll = new LinkedList<number>();

ll.addAtHead(1);
ll.addAtHead(2);
ll.addAtHead(3);

ll.display();
