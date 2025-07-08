class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    } // 연결리스트는 데이터와 다음 노드를 가르키는 포인터로 구성되어있음. 
    // 따라서! 구조체를 활용해서 C언어에만 있는 연결리스트를 만들 것이다~ 이말이여
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data) { // 어디에 무슨 값을 넣을 건지
        if (index > this.count || index < 0) { // 만약, index가 카운트(연결리스트의 길이)보다 크거나, 0보다 작으면
            throw new Error("범위를 넘어갔습니다."); // 오류 메세지를 출력합니당.
        }

        let newNode = new Node(data); // 새로운 노드 객체 생성 데이터를 넣어주고여

        if (index == 0) { // 만약 index가 0이라면
            newNode.next = this.head; // 새로운 노드 객체의 다음은 head를 가르키도록 한당
            this.head = newNode; // 헤드는 뉴노드가 됨. 왜냐 0에다가 insert했응께
        } else {
            // currentNode는 이동하면서 현재 위치를 추적하는 역할을 합니다.
            let currentNode = this.head; // 0 아니면은 그냥 일반 넣기를 해야겟졍 큐런트 노드를 만들어여. 그리고 헤드의 값을 넣어줌
            for (let i = 0; i < index - 1; i++) { // index 바로 앞 값까지 쫓아가여
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next; // 새 노드의 다음은 큐런트 노드의 다음.
            currentNode.next = newNode; // 큐런트 노드(가르키는 노드)의 다음은 뉴노드를 가르킵니당.

            // 초기: [A] → [B] → [C] → [D]
            /// 1. currentNode = head (A를 가리킴)
            //  2. 1번 이동: currentNode = B
            // 3. B와 C 사이에 X 삽입:
            // - X.next = C (새 노드 X가 C를 가리킴)
            // - B.next = X (B가 X를 가리킴)

            // 결과: [A] → [B] → [X] → [C] → [D]

            // 와 이해했다 박수와함성...
        }

        this.count++; // 그리고 ㅏㅋ운트를 하나 올려줭/
    } // insertAt

    printAll() {
        let currentNode = this.head; // 시작점 설정
        let text = "[" // 이쁘게 출력하쟈

        while (currentNode != null) { // cn이 null이 아닐때까지1
            // console.log(currentNode.data)
            text += currentNode.data; // text에 데이터값 계속 추가
            currentNode = currentNode.next; // cn 다음으로 계속 넘겨드림
            if (currentNode != null) { // 만약 cn이 null이 아니면 계속 , 붙여드림
                text += ",";
            }
        }
        text += "]" // null이어서 나왔어 그럼 포장해서
        console.log(text); // 로그찍어드림~
    }

    clear() {
        this.head = null;
        this.count = 0;
    } // 비우긔

    insertLast(data) {
        this.insertAt(this.count, data)
    } // 마지막 부분에 데이터를 그냥 넣어줌, 카운트를 index로 활용해서 그냥 데이터 넣어드림

    deleteAt(index) { // 아이고;
        if (index >= this.count || index < 0) { // 만약, index가 카운트(연결리스트의 길이)보다 크거나, 0보다 작으면
            throw new Error("범위를 넘어갔습니다."); // error
        }
        let currentNode = this.head; // 큐런트노드가 헤드를 가르키게 하는 건 진짜 만국 공통인가보다 그냥 외 우 자
        if (index == 0) { // 만약 인덱스가 0이면은
            let deleteNode = this.head; // 고냥 딜리트노드는 헤드
            this.head = this.head.next; // 헤드는 헤드 다음 가르키게하고
            this.count--; // 카운트 깎음
            return deleteNode; // 리턴!
        } else {
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next; // cn을 지울거 전까지 데려감
            }
            let deleteNode = currentNode.next; // 지울거 선택
            currentNode.next = currentNode.next.next; // cn 다음 다음
            this.count--; // 카운트 깎어
            return deleteNode; // 리턴
            ////////와이해했다인생폈다
            //꿀팁! 뭐든 그림을 그랴ㅑㅕ랴
            //와개졸리네ㅐㅑㅕ
        }
    }
    
    deleteLast() { // 마지막거지울거면 그냥 카운트-1하긔
        this.deleteAt(this.count - 1);
    }

    getNodeAt(index) { // 값알려주는거네
        if (index >= this.count || index < 0) { // 예외처리&**&*()+-
            throw new Error("범위를 넘어갔습니다.");
        }
        let currentNode = this.head; //이건외자꾸헤요

        for (let i = 0; i < index; i++) { // 
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export { Node, LinkedList };
