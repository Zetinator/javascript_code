/**
* https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
*/
class UGraph {
    /** 
    * Builds the graph from an adjacent list
    * @summary https://en.wikipedia.org/wiki/Adjacency_list
    * @param {Map} graph graph in a Map-like format
    * @return {?Set} set with all the neighbors found for this node
    */
    constructor(graph = new Map()) {
        this.inner_graph = new Map();
        this.nodes = new Set();
        // change list -> set to speed up the is_neighbor function to O(1)
        for (let [k, v] of graph.entries()) {
            let tmp = new Set();
            for (let item of v) {
                tmp.add(item);
            }
            this.inner_graph.set(k, tmp);
            this.nodes.add(k);
        }
    }
    /** 
    * Fetch all the neighbors from the given node
    * @summary returns a set of all the adjacent nodes of the given input node
    * @param {*} node node to look for its neighbors
    * @return {?Set} set with all the neighbors found for this node
    */
    neighbors(node) {
        if (!this.inner_graph.has(node)) return [];
        return this.inner_graph.get(node) || [];
    }
    /** 
    * Checks if 2 given nodes are neighbors in the graph
    * @summary returns a boolean value true if the nodes are neighbors, false otherwise
    * @param {*} node_1 first node
    * @param {*} node_2 second node
    * @return {boolean} true if the nodes are neighbors, false otherwise
    */
    are_neighbors(n_1 = null, n_2 = null) {
        if (!this.inner_graph.has(n_1) || !this.inner_graph.has(n_2)) return false;
        return this.inner_graph.get(n_1).has(n_2) || this.inner_graph.get(n_2).has(n_1) || false;
    }
}

export default UGraph;