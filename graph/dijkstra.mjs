class City {
    constructor(name) {
        this.name = name;
        this.adjacent_cities = {};  // 해시테이블로 선언
    }

    addAdjacentCity(city, distance) {
        this.adjacent_cities[city.name] = distance;
    }

    removeAdjacentCity(city) {
        delete this.adjacent_cities[city.name];
    }
} // class

class Dijkstra {
    constructor() {
        this.all_cities = {};
    }

    registerCity(city) {
        this.all_cities[city.name] = city;
    }

    shortestPath(start_city, end_city) { //start_city:서울, end_city:대구
        let visited_cities = {};
        let unvisited_cities = {};
        let shortest_path_table = {};




    } // shortestPath


} // class