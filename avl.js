import BST from "./bst";
/**
* The classical node structure
*/
class Node {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.weight = 1;
    }
}
/**
* https://en.wikipedia.org/wiki/AVL_tree
* @extends BST
*/
class AVL extends BST{
    /** 
    * Builds the linked tree from an iterable collection
    * @param {*} value the value to look for
    */
    constructor(arr = []) {
        super(arr);
    }
    /** 
    * standard right rotation: https://en.wikipedia.org/wiki/AVL_tree#Simple_rotation
    * @param {Node} node the node used as pivot
    */
    rotate_right(node) {
        if (!node) return;
        let tmp = new Node(node.value);
        [tmp.left, tmp.right] = [node.left.right, node.right];
        // rotate around pivot
        node.value = node.left.value;
        [node.left, node.right] = [node.left.left, tmp];
        // update weights
        let compute_weight = (node) => node ? node.weight: 0;
        node.right.weight = Math.max(compute_weight(node.right.left), compute_weight(node.right.right)) + 1;
        node.weight = Math.max(compute_weight(node.left), compute_weight(node.right)) + 1;
    }
    /** 
    * standard left rotation: https://en.wikipedia.org/wiki/AVL_tree#Simple_rotation
    * @param {Node} node the node used as pivot
    */
    rotate_left(node) {
        if (!node) return;
        let tmp = new Node(node.value);
        [tmp.left, tmp.right]  = [node.left, node.right.left];
        // rotate around pivot
        node.value = node.right.value;
        [node.left, node.right] = [tmp, node.right.right];
        // update weights
        let compute_weight = (node) => node ? node.weight: 0;
        node.left.weight = Math.max(compute_weight(node.left.left), compute_weight(node.left.right)) + 1;
        node.weight = Math.max(compute_weight(node.left), compute_weight(node.right)) + 1;
    }
    /** 
    * Inserts a new node with the given value to the start of the tree
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    insert(value) {
        if (value == null) return;
        // trivial case: empty tree
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        // general case:
        let recurse = (node = null) => {
            if (!node) return;
            if (value === node.value) throw `${value}? no repetitions allowed!`;
            if (value < node.value) {
                if (node.left) recurse(node.left);
                else node.left = new Node(value);
            }
            else {
                if (node.right) recurse(node.right);
                else node.right = new Node(value);
            }
            // update weights
            let compute_weight = (node) => node ? node.weight: 0;
            node.weight = Math.max(compute_weight(node.left), compute_weight(node.right)) + 1;
            // repair violations
            let balance = compute_weight(node.right) - compute_weight(node.left);
            // left case
            if (balance < -1) {
                // croocked?
                if (value > node.left.value) this.rotate_left(node.left);
                this.rotate_right(node);
            }
            // right case
            if (balance > 1) {
                // croocked?
                if (value < node.right.value) this.rotate_right(node.right);
                this.rotate_left(node);
            }
        };
        return recurse(this.root);
    }
}

export default AVL;