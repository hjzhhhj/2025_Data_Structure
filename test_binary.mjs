import { Binarytree } from "./binarytree.mjs";

let tree1 = new Binarytree(1);
let tree2 = new Binarytree(2);
let tree3 = new Binarytree(3);
let tree4 = new Binarytree(4);
let tree5 = new Binarytree(5);
let tree6 = new Binarytree(6);
let tree7 = new Binarytree(7);

tree1.setLeftSubTree(tree2);
tree1.setRightSubTree(tree3);
tree2.setLeftSubTree(tree4);
tree2.setRightSubTree(tree5);
tree3.setLeftSubTree(tree6);
tree3.setRightSubTree(tree7);

console.log("루트노드의 오른쪽 자식 노드 :", tree1.getRightSubTree().getData());
console.log("루트노드의 오른쪽 자식 노드의 왼쪽 자식 노드 :", tree1.getRightSubTree().getLeftSubTree().getData());
console.log("루트노드의 왼쪽 자식 노드 :", tree1.getLeftSubTree().getData());
console.log("루트노드 :", tree1.getData());

console.log("-")
tree1.preOrderTraversal(tree1);