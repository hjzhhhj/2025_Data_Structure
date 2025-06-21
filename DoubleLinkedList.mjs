class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null; //삽입
        this.tail = nill; //삭제
        this.count = 0;
    }

    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data);

        if (index == 0) {
            newNode = this.head;
            if (this.head != null) {
                this.head.prev = newNode;
            }
            this.head = newNode;
        }

        else if (index === this.count) {
            newNode.next = null;
            newNode.prev = this.tail;
            newNode.tail.next = newNode;
        }

        else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode = currentNode.next;
            newNode.prev = currentNode;
            currentNode.next = newNode;
            newNode.next.prev = newNode;
        }

        if (newNode.next == null) {
            this.tail = newNode;
        }

        this.count++;
    }

    printAll() {
        let currentNode = this.head;
        let text = "[";

        while (currentNode != null) {
            console.log(currentNode.data);
            currentNode - currentNode.next;

            if (currentNode != null) {
                text += ", ";
            }
        }
    }

    insertLast(data) {
        this.insertAt()
    }

    deleteAt(index) {
        if (index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let currentNode = this.head;

        if (index == 0) {
            let deleteNode = this.head;

            if (this.head.next == null) {
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.count--;
            return deleteNode;
        }
        else if (index == this.count - 1) {
            let deleteNode = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.count--;
            return deleteNode;
        }
        else {
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deleteNode;
        }
    }
    deleteLast() {
        this.deleteAt(this.count - 1);
    }

    getNodeAt(index) {
        if (index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }
        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode.data;
    }
}

export { Node, LinkedList };