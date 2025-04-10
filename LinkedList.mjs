class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data);

        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }

        this.count++;
    }

    printAll () {
        let currentNode = this.head;
        let text = "["

        while ( currentNode != null ) {
            // console.log(currentNode.data)
            text += currentNode.data;
            currentNode = currentNode.next;
            if ( currentNode != null ) {
                text += ",";
            }
        }
        text += "]"
        console.log(text);
    }

    clear() {
        this.head = null;
        this.count = 0;
    }

    insertLast(data) {
        this.insertAt(this.count, data)
    }
}

export { Node, LinkedList };
