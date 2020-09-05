/**
* The classical heap
*/
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
        while ((left(i) && this._core[left(i)] < this._core[i]) || (right(i) && this._core[right(i)] < this._core[i])) {
            let choosen_child = left(i);
            // we keep the smaller of the childs
            if (right(i) && this._core[right(i)] < this._core[left(i)]) {
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
        while (this._core[i] < this._core[parent(i)]) {
            // swap
            [this._core[parent(i)], this._core[i]] = [this._core[i], this._core[parent(i)]];
            i = parent(i);
        }
    }
    /** 
    * Removes the minimum element from the heap
    * @return {?Node} the node containing the value if found...
    */
    peek() {
        if (!this._core?.length) return null;
        return this._core[0];
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
    /** 
    * Returns a string representation of the values from the linked heap
    * @return {string} the node containing the value if found...
    */
    toString() {
        return JSON.stringify(this._core);
    }
}

export default Heap;