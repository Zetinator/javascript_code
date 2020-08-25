import BST from "./bst";
/**
* The classical node structure
*/
class Node {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.weight = Math.random();
    }
}
/**
* https://en.wikipedia.org/wiki/Treap
* @extends BST
*/
class Treap extends BST{
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
        let recurse = (node = null, parent = null) => {
            if (!node) return;
            if (value === node.value) throw `${value}? no repetitions allowed!`;
            if (value < node.value) {
                if (node.left) recurse(node.left, node);
                else node.left = new Node(value);
            }
            else {
                if (node.right) recurse(node.right, node);
                else node.right = new Node(value);
            }
            // time to bubble-up
            if (parent && node.weight > parent.weight) {
                // are we the right or left child
                if (node == parent.right) this.rotate_left(parent);
                else this.rotate_right(parent);
            }
        };
        return recurse(this.root);
    }
    /** 
    * Removes the node containing the value from the tree
    * We find the value, and then rotate the node until it becomes a leaf
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    remove(value) {
        if (value == null || !this.root) return null;
        // find the node
        let fetch = (node = null, parent = null) => {
            if (!node) return [node, parent];
            if (value === node.value) return [node, parent];
            if (value < node.value) {
                return fetch(node.left, node);
            }
            else {
                return fetch(node.right, node);
            }
        };
        let [node, parent] = fetch(this.root, null);
        // not found... we are done
        if (!node) return node;
        // rotate the node found until it becomes a leaf... then erasing is trivial
        let move_till_leaf = (node = null, parent = null) => {
            if (!node) return node;
            // erase when leaf
            if (!node.left && !node.right){
                // special case: is the head
                if (!parent) {
                    this.root = null;
                    return node;
                }
                if (node == parent.right) parent.right = null;
                else parent.left = null;
                return node;
            }
            // rotate until it becomes a leaf
            if (!node.left) {
                this.rotate_left(node);
                return move_till_leaf(node.left, node);
            }
            else {
                this.rotate_right(node);
                return move_till_leaf(node.right, node);
            }
            
        };
        return move_till_leaf(node, parent);
    }
}

export default Treap;