import { DoubleLinkedList } from "./DoubleLinkedList.mjs"

class Queue {
    constructor() {
        this.list = new DoubleLinkedList();
    }

    enqueue(data) {
        this.list.insertAt(0, data);
    }

    dequeue() {
        try {
            return this.list.deleteLast();
        }
        catch(e) {
            return null;
        }
    }
        front() {
            return this.list.tail;
        }
        isEmpty
}