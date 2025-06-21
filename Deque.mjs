import { DoubleLinkedList } from DoubleLinkedList.mjs

class Deque {
    constructor() {
        this.list = new DoubleLinkedList();
    }


    printAll() {
        this.list.printAll();
    }

    addFirst() {
        this.list.insertAt(0, data);
    }

    addLast() {
        this.list.insertLast();
    }

    removeFirst() {
        this.list.DeleteAt(0, data);
    }

    removeLast() {
        this.list.DeleteLast();
    }

    isEmpty() {
    }
}
