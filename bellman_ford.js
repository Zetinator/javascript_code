import WGraph from './w_graph'

/** 
* this function will explore and find the shortest path between a source node and a target
* @summary https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
* @param {WGraph} graph graph to explore
* @param {value} source source node to start looking from
* @param {target} target node to trace the shortest path to
* @return {Array} array with the path and the minimum cost [path, cost]
*/
function bellman_ford(w_graph = new Map(), source = null, target = null) {
    if (w_graph.inner_graph.size == 0) return [];
    // preprocessing create matrices with distances
    let distances = new Map();
    for (let node of w_graph.nodes) {
        distances.set(node, Infinity);
    }
    // distance from the source to the source is 0
    distances.set(source, 0);
    // the actual bellman_ford
    let parents = new Map();
    for (let _ = 0; _ < w_graph.nodes.size - 1; _++) {
        for (let [u, v] of w_graph.edges) {
            let current_distance = distances.get(u) + w_graph.weight(u, v);
            // shorter path found?
            if (current_distance < distances.get(v)) {
                distances.set(v, current_distance);
                parents.set(v, u);
            }
        }
    }
    // check fo negative cycles
    for (let [u, v] of w_graph.edges) {
        let current_distance = distances.get(u) + w_graph.weight(u, v);
        if (current_distance < distances.get(v)) throw `Negative cycle detected...`;
    }
    // traceback path from target to source
    let [current_node, path] = [target, []];
    while (current_node != null) {
        path.push(current_node);
        current_node = parents.get(current_node);
    }
    return [path.reverse(), distances.get(target)];
};

export default bellman_ford;