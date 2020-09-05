import UGraph from './u_graph'

/** 
* this function will explore and list all the connected components of a graph using dfs
* @summary https://en.wikipedia.org/wiki/Depth-first_search
* @param {UGraph} graph graph to explore
* @return {Array} array of arrays with the connected nodes
*/
function dfs(u_graph = new Map()) {
    if (u_graph.inner_graph.size == 0) return [];
    // calls to the actual dfs
    let parents = new Map();
    let visited_nodes = [];
    function r_dfs(node = null) {
        // update out list
        visited_nodes.push(node);
        for (let child of u_graph.neighbors(node)) {
            if (!parents.has(child)) {
                parents.set(child, node);
                r_dfs(child);
            }
        }
    }
    // call the recursive function on each node
    let output = [];
    for (let node of u_graph.nodes) {
        // no repetitions allowed
        if (!parents.has(node)) {
            parents.set(node, null);
            visited_nodes = [];
            r_dfs(node);
            output.push(visited_nodes);
        }
    }
    return output;
};

export default dfs;