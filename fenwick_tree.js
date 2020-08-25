/**
* The classical fenwick_tree
* https://en.wikipedia.org/wiki/Fenwick_tree
*/
class FenwickTree {
    /** 
    * Builds the linked tree from an iterable collection
    * @param {*} value the value to look for
    */
    constructor(arr = []) {
        this.arr = Array(arr.length).fill(0);
        this.tree = Array(arr.length + 1).fill(0);
        // build the linked tree from the arr
        for (let [i, e] of arr.entries()) {
            this.update(i, e);
        }
    }
    /** 
    * updates the value of the fenwick tree
    * @param {int} i index of the value to update
    * @param {value} value the value to update the tree at index "i"
    */
    update(i, value) {
        if (!this.arr?.length) return;
        // compute delta
        let delta = value - this.arr[i];
        // update original array
        this.arr[i] = value;
        // makes easy the shift operation if we start use 1
        let ii = parseInt(i) + 1;
        // update tree, all the near powers of 2
        while (ii < this.tree.length) {
            this.tree[ii] += delta;
            ii += ii & (-ii);
        }
    }
    /** 
    * Returns the max found between the given interval
    * @param {int} left beggining of the interval to look for
    * @param {int} right ending of the interval to look for
    * @return {?Node} the node containing the max value if found...
    */
    sum(left, right = null) {
        if (right != null) {
            if (left > right || left < 0 || right >= this.arr.length) throw `${[left, right]} is a non valid range`;
            return this.sum(right) - this.sum(left);
        }
        // the offset makes easy the shift operations
        let i = left + 1;
        let output = 0;
        while (i > 0) {
            output += this.tree[i];
            i -= i & (-i);
        }
        return output;
    }
    /** 
    * Returns a string representation of the values from the linked tree
    * @return {string} the node containing the value if found...
    */
    toString() {
        return JSON.stringify(this.tree.slice(1,));
    }
}

export default FenwickTree;