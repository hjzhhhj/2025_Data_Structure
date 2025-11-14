class WeightedGraphVertex {

    constructor(value) {
        this.value = value;
        this.adjacent_vertices = {};        
    }

    addAdjacentVertex(vertex, weight) {
        this.adjacent_vertices[vertex.value] = weight;
    }

    removeAdjacentVertex(vertex) {
        delete this.adjacent_vertices[vertex.value];
    }
} // class


let seoul = new WeightedGraphVertex("서울");
let wonju = new WeightedGraphVertex("원주");
let gangneung = new WeightedGraphVertex("강릉");
let daejeon = new WeightedGraphVertex("대전");
let jeonju = new WeightedGraphVertex("전주");
let daegu = new WeightedGraphVertex("대구");

seoul.addAdjacentVertex(wonju, 87);
seoul.addAdjacentVertex(gangneung, 165);
seoul.addAdjacentVertex(daejeon, 140);
seoul.addAdjacentVertex(jeonju, 187);

console.log(seoul.adjacent_vertices);

seoul.removeAdjacentVertex(gangneung);
seoul.removeAdjacentVertex(jeonju);

console.log(seoul.adjacent_vertices);