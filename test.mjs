import { Node, LinkedList } from "./LinkedList.mjs";

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1.next.next.data)

let list = new LinkedList();
list.insertAt(0, 1)
list.insertAt(1, 2)
list.insertAt(2, 3)
list.insertAt(3, 4)
list.printAll();