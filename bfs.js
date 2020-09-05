import UGraph from './u_graph'

/** 
* this function will explore and list all the connected components of a graph using bfs
* @summary https://en.wikipedia.org/wiki/Breadth-first_search
* @param {UGraph} graph graph to explore
* @return {Array} array of arrays with the connected nodes
*/
function bfs(u_graph = new Map()) {
    if (u_graph.inner_graph.size == 0) return [];
    // calls to the actual bfs
    let parents = new Map();
    function r_bfs(start_node = null, out = []) {
        // explore connected nodes
        let front = [start_node];
        while (front.length > 0) {
            let _next = [];
            for (let node of front) {
                // add visited node to output list
                out.push(node);
                for (let child of u_graph.neighbors(node)) {
                    // no repetitions allowed
                    if (!parents.has(child)) {
                        _next.push(child);
                        parents.set(child, node);
                    }
                }
            }
            front = _next;
        }
        return out;
    }
    // call the recursive function on each node
    let output = [];
    for (let node of u_graph.nodes) {
        // no repetitions allowed
        if (!parents.has(node)) {
            parents.set(node, null);
            output.push(r_bfs(node));
        }
    }
    return output;
};

export default bfs;