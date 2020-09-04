/**
* https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
*/
class UGraph {
    /** 
    * Builds the linked tree from an adjacency list https://en.wikipedia.org/wiki/Adjacency_list
    * @param {Map} graph adjacent list upon we'll build the graph
    */
    constructor(graph = Map) {
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
    * gets array of adjacent nodes (neighbors) from the given node
    * @return {?Set} the node containing the value if found...
    */
    nodes() {
        return this.nodes;
    }
    /** 
    * gets array of adjacent nodes (neighbors) from the given node
    * @param {*} node the value of the node to look for
    * @return {?Set} the node containing the value if found...
    */
    neighbors(node) {
        if (!this.inner_graph.has(node)) return null;
        return this.inner_graph.get(node);
    }
    /** 
    * boolean are n_1 and n_2 neighbors
    * @param {*} v_1 the node of the first node
    * @param {*} v_2 the node of the second node
    * @return {boolean} the node containing the value if found...
    */
    are_neighbors(n_1 = null, n_2 = null) {
        if (!this.inner_graph.has(n_1) || !this.inner_graph.has(n_2)) return false;
        return this.inner_graph.get(n_1).has(n_2) || this.inner_graph.get(n_2).has(n_1);
    }
}

export default UGraph;