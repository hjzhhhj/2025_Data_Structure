class Node {
    constructor ( data, next = null ) {
        this.data = data;
        this.next = next; // 멤버 변수 or 프로퍼티 ( property )
    }
} // Node

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;   
    } // constructor

    insertAt(index, data) {
        if ( index > this.count || index < 0 ) {
            throw new Error("범위를 넘어갔습니다.")
        }

        let newNode = new Node(data);

        if ( index == 0 ) {
            newNode = this.head;
            this.head = newNode;
        } else {
            
        }

        count++;
    }
} // Node

export {Node, LinkedList};