/**
* The classical node structure for the segment_tree
* https://en.wikipedia.org/wiki/Segment_tree
*/
class Node {
    constructor(value = null, range = []) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.range = range;
    }
}
/**
* https://en.wikipedia.org/wiki/Segment_tree
*/
class SegmentTree {
    /** 
    * Builds the linked tree from an iterable collection
    * @param {*} value the value to look for
    */
    constructor(arr = []) {
        this.root = null;
        this.core = arr;
        // build the linked tree from the arr
        this.build(arr);
    }
    /** 
    * Builds the tree from the given array
    * @param {Array} arr the value to look for
    */
    build(arr) {
        if (!arr?.length) return;
        // general case:
        function recurse(l = 0, r = arr.length - 1) {
            if (l >= r) return new Node(arr[l], [l, r]);
            // divide
            let node = new Node();
            let m = Math.trunc((l + r) / 2);
            node.left = recurse(l, m);
            node.right = recurse(m + 1, r);
            node.range = [l, r];
            // accumulator function (conquer)
            node.value = Math.min(node.left.value, node.right.value)
            return node;
        }
        this.root = recurse();
    }
    /** 
    * Returns the max found between the given interval
    * @param {int} left beggining of the interval to look for
    * @param {int} right ending of the interval to look for
    * @return {?Node} the node containing the max value if found...
    */
    query_min(left, right) {
        if (left > right) throw `${[left, right]} is a non valid range`;
        // sanitize the inputs
        [left, right] = [Math.max(left, 0), Math.min(this.core.length - 1, right)]
        function r_query(node, l, r, left, right) {
            // skip absurds
            if (l > r || r < left || right < l) return Infinity;
            // left and right perfectly contain l and r, we are done
            if (left <= l && r <= right) return node.value;
            // explore children
            let m = Math.trunc((l + r) / 2);
            let tmp_left = r_query(node.left, l, m, Math.max(l, left), Math.min(m, right));
            let tmp_right = r_query(node.right, m + 1, r, Math.max(left, m + 1), Math.min(r, right));
            // max between children
            return Math.min(tmp_left, tmp_right);
        }
        return r_query(this.root, 0, this.core.length - 1, left, right);
    }
    /** 
    * Returns a string representation of the values from the linked tree
    * @return {string} the node containing the value if found...
    */
    toString() {
        if (!this.root) return '';
        let output = []
        function traverse(node, l = 0) {
            if (!node) return;
            traverse(node.right, l + 1);
            output.push(`${Array(l).fill('\t').join('')}-->(${node.value})[${node.range}]`);
            traverse(node.left, l + 1);
        }
        traverse(this.root);
        return output.join('\n');
    }
}

export default SegmentTree;