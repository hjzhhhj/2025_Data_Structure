class Vertex {
    constructor(value) {
        this.value = value;
        this.adjacent_vertices = [];
    }   

    addAdjacentVertex(vertex) {
        this.adjacent_vertices.push(vertex);
    }

    removeAdjacentVertex(vertex) {
        for(let i=0; i<this.adjacent_vertices.length; i++) {
            if(this.adjacent_vertices[i] ===vertex) {
                this.adjacent_vertices.splice(i, 1);
            }
        }
    }
}

function DFS(vertex, visited_vertices={}) {
    visited_vertices[vertex.value] = true;
    console.log(`정점 : ${vertex.value}`);

    for(let adjacent of vertex.adjacent_vertices) {
        if(visited_vertices[adjacent.value] === true) {
            continue;
        }
        else {
            DFS(adjacent, visited_vertices);
        }
    }  // for
} // DFS


let ben = new Vertex("Ben");
let jake = new Vertex("Jake");
let joy = new Vertex("Joy");
let ivy = new Vertex("Ivy");
let elin = new Vertex("Elin");
let anna = new Vertex("Anna");
let david = new Vertex("David");
let owen = new Vertex("Owen");

ben.addAdjacentVertex(ivy);
ben.addAdjacentVertex(jake);
ben.addAdjacentVertex(anna);
ben.addAdjacentVertex(david);
ivy.addAdjacentVertex(ben);
ivy.addAdjacentVertex(joy);
joy.addAdjacentVertex(ivy);
joy.addAdjacentVertex(jake);
jake.addAdjacentVertex(ben);
jake.addAdjacentVertex(joy);
anna.addAdjacentVertex(ben);
david.addAdjacentVertex(ben);
david.addAdjacentVertex(elin);
elin.addAdjacentVertex(david);
elin.addAdjacentVertex(owen);
owen.addAdjacentVertex(elin);

// DFS(ben);
DFS(elin);