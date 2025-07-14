class Node {
    constructor(data, next = null, prev = null) {
        this.data = data; // 데이터
        this.next = next; // 다음
        this.prev = prev; // 전
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null; // 삽입
        this.tail = null; // 삭제
        this.count = 0;
    }

    insertAt(index, data) { // 새 노드 먼저 설정 -> 전 설정 -> 후 설정
        if (index > this.count || index < 0) { // 범위
            throw new Error("범위를 넘어갔습니다.");
        }

        let newNode = new Node(data); // 새노드

        if (index == 0) {
            newNode.next = this.head; // 새 노드의 다음을 헤드가 가르키는 곳으로.
            if (this.head != null) { // 만약 헤드가 비어잇지 않다면
                this.head.prev = newNode; // 헤드가 가르키는 노드의 전은 뉴 노드를 가르키게
            }
            this.head = newNode; // 헤드는 뉴 노드를 가르키게

            // 1. 새노드 -> A
            // 2. head != null 새노드 <- A
            // 3. head -> 새노드
        }

        else if (index === this.count) {
            newNode.next = null; // 다음은 비었음
            newNode.prev = this.tail; // 새 노드의 전은 테일이 가르키는곳
            this.tail.next = newNode; // 테일이 가르키는 곳의 다음은 뉴노드
        } // 만약 마지막에 삽입할라고 하면

        else {
            let currentNode = this.head; // 큐런트노드는 헤드가가르키는곳
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next; // cn은 추가할곳전까지감
            } 
            newNode.next = currentNode.next; // 새 노드 다음은 cn 다음
            newNode.prev = currentNode; // 새 노드의 전은 큐런트노드
            currentNode.next = newNode; // 큐런트 노드의 다음은 뉴노드
            newNode.next.prev = newNode; // 뉴노드 다음의 전은 뉴노드를 가르키게
        }

        if (newNode.next == null) { // 만약 뉴노드의 다음이 비었어!
            this.tail = newNode; // 그럼 테일은 뉴 노드를 가르킴
        }

        this.count++; // 카운트 증가
    }

    printAll() {
        let currentNode = this.head;
        let text = "[";

        while (currentNode != null) {
            text += currentNode.data; 
            currentNode = currentNode.next;

            if (currentNode != null) {
                text += ", ";
            }
        }
        text += "]"; 
        console.log(text);
    }

    insertLast(data) {
        this.insertAt(this.count, data) 
    }

    deleteAt(index) {
        if (index >= this.count || index < 0) { 
            throw new Error("범위를 넘어갔습니다.");
        }

        let currentNode = this.head; // 헤드가 가르키는곳이 cn

        if (index == 0) { // 0 
            let deleteNode = this.head; // 지울곳은 헤드가가르키는거임

            if (this.head.next == null) { // 헤드가 가르키는곳 다음이 널이면
                this.head = null; 
                this.tail = null; // 그냥 연결리스트를 비움 ㅋ
            }
            else {
                this.head = this.head.next; // 아니면 헤드는 헤드의 다음을 가르키고
                this.head.prev = null; // 헤드의 전을 비움
            }
            this.count--; // 카운트 줄여
            return deleteNode;
        }
        else if (index == this.count - 1) { // 지울거거가 맨마지막꺼면
            let deleteNode = this.tail; // 테일이가르키는거가 지울거임
            this.tail.prev.next = null; // 테일이 가르키는거의 전의 다음을 비움 a b c / b는 null가르킴
            this.tail = this.tail.prev;  // tail은 tail전
            this.count--; // 카운트 줄임
            return deleteNode;
        }
        else {
            for (let i = 0; i < index - 1; i++) { // 전까지 가
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next; // 지울거설ㅈㅇ
            currentNode.next = currentNode.next.next; // 전꺼 다음은 다음다음ㅇ을 가리켜
            currentNode.next.prev = currentNode; // 전꺼 다음의 전은 cn을가르켜
            this.count--; // 카웈트줄ㄹ여
            return deleteNode;
        }
    }
    deleteLast() {
        this.deleteAt(this.count - 1);
    }

    getNodeAt(index) {
        if (index >= this.count || index < 0) { 
            throw new Error("범위를 넘어갔습니다.");
        }
        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode.data;
    }
}

export { Node, DoubleLinkedList }; // ✅ 수정: LinkedList → DoubleLinkedList