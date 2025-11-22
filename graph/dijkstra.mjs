class City {
  constructor(name) {
    this.name = name;
    this.adjacent_cities = {};
  }

  addAdjacentCity(city, distance) {
    this.adjacent_cities[city.name] = distance;
  }

  removeAdjacentCity(city) {
    delete this.adjacent_cities[city.name];
  }
}

class Dijkstra {
  constructor() {
    this.all_cities = {};
  }

  registerCity(city) {
    this.all_cities[city.name] = city;
  }

  addAdjacent(cityA, cityB, distance) {
    cityA.addAdjacentCity(cityB, distance);
    cityB.addAdjacentCity(cityA, distance);
  }

  shortestPath(start_city, end_city) {
    let visited_cities = {};
    let unvisited_cities = {};
    let shortest_path_table = {};

    for (let city_name in this.all_cities) {
      unvisited_cities[city_name] = this.all_cities[city_name];
    }

    if (unvisited_cities[start_city.name] === null) {
      console.log("출발 도시가 등록되어 있지 않습니다.");
      return null;
    } else {
      for (let city_name in unvisited_cities) {
        shortest_path_table[city_name] = { distance: Infinity, city: null };
      }
    }

    shortest_path_table[start_city.name] = { distance: 0, city: null };

    while (Object.keys(unvisited_cities).length > 0) {
      let closest_city_name = null;

      for (let city_name in unvisited_cities) {
        if (
          closest_city_name === null ||
          shortest_path_table[city_name].distance <
            shortest_path_table[closest_city_name].distance
        ) {
          closest_city_name = city_name;
        }
      }

      visited_cities[closest_city_name] = unvisited_cities[closest_city_name];
      delete unvisited_cities[closest_city_name];

      for (let adjacent_cities_name in visited_cities[closest_city_name]
        .adjacent_cities) {
        if (unvisited_cities[adjacent_cities_name] === null) {
          continue;
        }

        let distance =
          shortest_path_table[closest_city_name].distance +
          visited_cities[closest_city_name].adjacent_cities[
            adjacent_cities_name
          ];

        if (shortest_path_table[adjacent_cities_name].distance > distance) {
          shortest_path_table[adjacent_cities_name].distance = distance;
        }
      }
    }

    console.log(shortest_path_table);
  }
}

let seoul = new City("서울");
let wonju = new City("원주");
let gangneung = new City("강릉");
let daejeon = new City("대전");
let jeonju = new City("전주");
let daegu = new City("대구");

seoul.addAdjacentCity(wonju, 87);
seoul.addAdjacentCity(gangneung, 165);
seoul.addAdjacentCity(jeonju, 187);
seoul.addAdjacentCity(daejeon, 140);

wonju.addAdjacentCity(seoul, 87);
wonju.addAdjacentCity(gangneung, 95);
wonju.addAdjacentCity(daegu, 78);
wonju.addAdjacentCity(daejeon, 118);

gangneung.addAdjacentCity(seoul, 165);
gangneung.addAdjacentCity(wonju, 95);
gangneung.addAdjacentCity(daegu, 212);

daejeon.addAdjacentCity(seoul, 140);
daejeon.addAdjacentCity(wonju, 118);
daejeon.addAdjacentCity(jeonju, 56);
daejeon.addAdjacentCity(daegu, 122);

jeonju.addAdjacentCity(seoul, 187);
jeonju.addAdjacentCity(daejeon, 56);
jeonju.addAdjacentCity(daegu, 130);

daegu.addAdjacentCity(wonju, 178);
daegu.addAdjacentCity(gangneung, 212);
daegu.addAdjacentCity(daejeon, 122);
daegu.addAdjacentCity(jeonju, 130);

let dijkstra = new Dijkstra();
dijkstra.registerCity(seoul);
dijkstra.registerCity(gangneung);
dijkstra.registerCity(wonju);
dijkstra.registerCity(jeonju);
dijkstra.registerCity(daegu);
dijkstra.registerCity(daejeon);

dijkstra.shortestPath(seoul, daegu);
