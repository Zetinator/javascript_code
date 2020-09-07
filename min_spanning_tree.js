import WGraph from './w_graph'
import DisjointSet from './disjoint_set';
/** 
* this function will explore and find minimum spanning tree of a weighted graph, with Kruskal's algorithm
* @summary https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
* @param {WGraph} graph graph to explore
* @return {number} the weight of the minimum spanning tree from the given graph
*/
function min_spanning_tree(w_graph = new Map()) {
    if (w_graph.inner_graph.size == 0) return [];
    // sort all the edges by weight
    let edges = Array.from(w_graph.edges);
    edges.sort((x, y) => w_graph.weight(x[0], x[1]) - w_graph.weight(y[0], y[1]));
    // apply some disjoint set's magic
    let weight_mst = 0
    let djs = new DisjointSet();
    for (let [u, v] of edges) {
        // avoid those who form a cycle
        if (djs.find(u) == djs.find(v)) continue;
        djs.union(u, v);
        // update current weight_mst
        weight_mst += w_graph.weight(u, v);
    }
    return weight_mst;
};

export default min_spanning_tree;