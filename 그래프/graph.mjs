class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacent_vertices = [];
  }

  addAdjacent(vertex) {
    this.adjacent_vertices.push(vertex);
  }

  removeAdjacent(vertex) {
    for (let i = 0; i < this.adjacent_vertices.length; i++) {
      if (this.adjacent_vertices[i] === vertex) {
        this.adjacent_vertices.splice(i, 1);
        return;
      }
    }
  }
}
