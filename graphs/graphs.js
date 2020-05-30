const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// Lets use Adjacency List
// Could be adjacency matrix too
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

 function addNode(airport, adjacencyList) {
    adjacencyList.set(airport, []);
}

 function addEdge(origin, destination, adjacencyList) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}


function initGraph() {
    const adjacencyList = new Map()
    airports.forEach(airport => addNode(airport, adjacencyList));
    routes.forEach(route => addEdge(...route, adjacencyList));
    return adjacencyList;
}

module.exports = { initGraph, addNode, addEdge };
