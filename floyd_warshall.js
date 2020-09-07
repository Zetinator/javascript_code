import WGraph from './w_graph'

/** 
* this function will explore and find the shortest path between a source node and a target
* @summary https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
* @param {WGraph} graph graph to explore
* @return {Map} map with all the distances from all nodes to all the nodes
*/
function floyd_warshall(w_graph = new Map()) {
    if (w_graph.inner_graph.size == 0) return [];
    // preprocessing create matrices with distances
    let distances = new Map();
    for (let u of w_graph.nodes) {
        // set columns
        let r_distances = new Map();
        for (let v of w_graph.nodes) {
            r_distances.set(v, w_graph.weight(u, v));
        }
        // set rows
        distances.set(u, r_distances);
        // set distance from the source to itself -> 0
        distances.get(u).set(u, 0)
    }
    // the actual floyd-warshall
    for (let k of w_graph.nodes) {
        for (let i of w_graph.nodes) {
            for (let j of w_graph.nodes) {
                let current_distance = distances.get(i).get(k) + distances.get(k).get(j);
                // shorter path found? update distance and path
                if (current_distance < distances.get(i).get(j)) {
                    distances.get(i).set(j, current_distance);
                }
            }
        }
    }
    return distances;
};

export default floyd_warshall;