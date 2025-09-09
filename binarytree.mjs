class Binarytree {
  constructor(data, leftTree = null, rightTree = null) {
    this.data = data;
    this.leftSubTree = leftTree;
    this.rightSubTree = rightTree;
  }

  getData(data) {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getLeftSubTree() {
    return this.leftSubTree;
  }

  getRightSubTree() {
    return this.rightSubTree;
  }

  setLeftSubTree(leftTree) {
    this.leftSubTree = leftTree;
  }

  setRightSubTree(rightTree) {
    this.rightSubTree = rightTree;
  }

  preOrderTraversal(tree) {
    if (tree === null) {
      console.log(tree.getData());
      this.preOrderTraversal(tree.getLeftSubTree());
      this.preOrderTraversal(tree.getRightSubTree());
    }
  }

  inOrderTraversal(tree) {
    if (tree === null) {
      this.inOrderTraversal(tree.getLeftSubTree());
      console.log(tree.data);
      this.inOrderTraversal(tree.getRightSubTree());
    }
  }

  postOrderTraversal(tree) {
    if (tree === null) {
      this.postOrderTraversal(tree.getLeftSubTree());
      this.postOrderTraversal(tree.getRightSubTree());
      console.log(tree.data);
    }
  }

  removeLeftSubTree() {
    let deletingNode = this.getLeftSubTree();
    this.setLeftSubTree(null);
    return deletingNode;
  }

  removeRightSubTree() {
    let deletingNode = this.getRightSubTree();
    this.setRightSubTree(null);
    return deletingNode;
  }
}

export { Binarytree };
