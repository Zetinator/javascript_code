import WGraph from './w_graph'

// special heap implementation to handle tuples of [weight, node] type
class Heap {
    /** 
    * Builds the linked heap from an iterable collection
    * @param {*} value the value to look for
    */
    constructor(arr = []) {
        this._core = [...arr];
        // repair the arr (floyd's algorithm)
        for (let i = Math.trunc(arr.length / 2); i >= 0; i--) {
            this.sift_down(i);
        }
    }
    /** 
    * sift down... (bubble down)
    * @param {number} index the index to start bubbling down from
    */
    sift_down(i = 0) {
        // trivial case: empty heap
        if (!this._core?.length) return;
        // auxiliar functions to retrive childs
        let left = (i) => (i * 2 + 1) < this._core.length ? (i * 2 + 1) : false;
        let right = (i) => (i * 2 + 2) < this._core.length ? (i * 2 + 2) : false;
        // if it has childs and any of the childs are smaller than the parent
        while ((left(i) && this._core[left(i)][0] < this._core[i][0]) || (right(i) && this._core[right(i)][0] < this._core[i][0])) {
            let choosen_child = left(i);
            // we keep the smaller of the childs
            if (right(i) && this._core[right(i)][0] < this._core[left(i)][0]) {
                choosen_child = right(i);
            }
            // swap
            [this._core[choosen_child], this._core[i]] = [this._core[i], this._core[choosen_child]];
            i = choosen_child;
        }
    }
    /** 
    * Appends a new node with the given value to the end of the heap
    * @param {*} value the value to look for
    */
    push(value) {
        if (value == null) return;
        let i = this._core.length;
        this._core.push(value);
        // auxiliar function to get the parent
        let parent = (i) => Math.max(0, Math.trunc((i - 1) / 2));
        // bubble up
        while (this._core[i][0] < this._core[parent(i)][0]) {
            // swap
            [this._core[parent(i)], this._core[i]] = [this._core[i], this._core[parent(i)]];
            i = parent(i);
        }
    }
    /** 
    * Removes the minimum element from the heap
    * @return {?Node} the node containing the value if found...
    */
    pop() {
        if (!this._core?.length) return null;
        // swap first with last one
        let last = this._core.length - 1;
        [this._core[last], this._core[0]] = [this._core[0], this._core[last]];
        // retrive minimum in O(1)
        let output = this._core.pop();
        // sift down from root
        this.sift_down();
        return output;
    }
}

/** 
* this function will explore and find the shortest path between a source node and a target
* @summary https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
* @param {WGraph} graph graph to explore
* @param {value} source source node to start looking from
* @param {target} target node to trace the shortest path to
* @return {Array} array with the path and the minimum cost [path, cost]
*/
function dijkstra(w_graph = new Map(), source = null, target = null) {
    if (w_graph.inner_graph.size == 0) return [];
    let parents = new Map();
    let heap = new Heap([[0, source, null]]);
    // the actual dijkstra
    let r_dijkstra = () => {
        while (heap._core.length > 0) {
            let [distance, node, parent] = heap.pop();
            // no revisiting
            if (parents.has(node)) continue;
            parents.set(node, parent);
            // target reached we are done
            if (node == target) return distance;
            // relax children
            for (let [child, weight] of w_graph.neighbors(node)) {
                // relax child
                heap.push([distance + weight, child, node])
            }
        }
        return Infinity;
    }
    let total_distance = r_dijkstra();
    // traceback path from target to source
    let [current_node, path] = [target, []];
    while (current_node != null) {
        path.push(current_node);
        current_node = parents.get(current_node);
    }
    return [path.reverse(), total_distance];
};

export default dijkstra;