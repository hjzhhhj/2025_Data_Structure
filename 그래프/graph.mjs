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

let ben = new Vertex("Ben");
let jake = new Vertex("Jake");
let joy = new Vertex("Joy");
let ivy = new Vertex("Ivy");
let alin = new Vertex("Alin");
let anna = new Vertex("Anna");
let david = new Vertex("David");

ben.addAdjacent(jake);
ben.addAdjacent(joy);
ben.addAdjacent(ivy);
ben.addAdjacent(anna);

joy.addAdjacent(ivy);

ivy.addAdjacent(joy);
ivy.addAdjacent(alin);

alin.addAdjacent(anna);

anna.addAdjacent(david);
anna.addAdjacent(alin);

david.addAdjacent(anna);
