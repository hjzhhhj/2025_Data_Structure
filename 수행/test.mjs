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

list.insertAt(3, 99)
list.printAll();

list.clear();
list.printAll();

list.insertLast(77);
list.insertLast(78);
list.insertLast(79)
list.printAll();

list.deleteAt(0);
list.printAll();

list.deleteLast(78)
list.printAll();

list.insertLast(81)
list.insertLast(82)
list.insertLast(83)
list.insertLast(84)
list.insertLast(85)
list.insertLast(86)

list.printAll();

console.log(list.getNodeAt(3))