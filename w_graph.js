/**
* https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
*/
class WGraph {
    /** 
    * Builds the linked tree from an adjacency list https://en.wikipedia.org/wiki/Adjacency_list
    * @param {Map} graph adjacent list upon we'll build the graph
    */
    constructor(graph = new Map()) {
        this.inner_graph = new Map();
        this.nodes = new Set();
        this.edges = [];
        // change list -> set to speed up the is_neighbor function to O(1)
        for (let [node, v] of graph.entries()) {
            let tmp = new Map()
            for (let [child, edge] of v) {
                tmp.set(child, edge);
                this.edges.push([node, child]);
            }
            this.inner_graph.set(node, tmp);
            this.nodes.add(node);
        }
    }
    /** 
    * gets array of adjacent nodes (neighbors) from the given node
    * @return {?Set} the set containing all nodes in the graph
    */
    nodes() {
        return this.nodes;
    }
    /** 
    * gets array of the edges connecting the nodes
    * @return {?Array} Arrays of edges node_1 -> node_-2: [node_1, node_2]
    */
    edges() {
        return this.edges;
    }
    /** 
    * gets array of adjacent nodes (neighbors) from the given node
    * @param {*} node the value of the node to look for
    * @return {?Map} map children and weights of the given node
    */
    neighbors(node) {
        if (!this.inner_graph.has(node)) return [];
        return this.inner_graph.get(node) || [];
    }
    /** 
    * gets array of adjacent nodes (neighbors) from the given node
    * @param {*} node the value of the node to look for
    * @return {?Map} the node containing the value if found...
    */
    weight(n_1 = null, n_2 = null) {
        if (!this.inner_graph.has(n_1)) return Infinity;
        return this.inner_graph.get(n_1).get(n_2) || Infinity;
    }
    /** 
    * boolean are n_1 and n_2 neighbors
    * @param {*} v_1 the node of the first node
    * @param {*} v_2 the node of the second node
    * @return {boolean} the node containing the value if found...
    */
    are_neighbors(n_1 = null, n_2 = null) {
        if (!this.inner_graph.has(n_1) || !this.inner_graph.has(n_2)) return false;
        return this.inner_graph.get(n_1).has(n_2) || this.inner_graph.get(n_2).has(n_1) || false;
    }
}

export default WGraph;