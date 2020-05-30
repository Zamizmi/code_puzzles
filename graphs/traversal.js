const graphs = require('./graphs');
const adjacencyList = graphs.initGraph();

function bfs(start, endDestination) {
    const visited = new Set();
    const queue = [start];

    while( queue.length > 0) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);

        for(const destination of destinations) {

            if(destination === endDestination) {
                console.log(`Flight ${start} - ${endDestination} found`)
            }

            if(!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
            }
        }
    }
}

function dfs(start,endDestination,  visited = new Set()) {
    visited.add(start);

    const destinations = adjacencyList.get(start);

    for( const destination of destinations) {
        if(destination === endDestination) {
            console.log(`Flight ${start} - ${endDestination} found`)
            return;
        }

        if(!visited.has(destination)) {
            dfs(destination, endDestination, visited);
        }
    }
}

module.exports = { dfs, bfs};
