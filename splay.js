import BST from "./bst";
/**
* The classical node structure for the double linked tree
*/
class Node {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/**
* The classical single linked tree
* @extends BST
*/
class Splay extends BST{
    /** 
    * Builds the linked tree from an iterable collection
    * @param {*} value the value to look for
    */
    constructor(arr = []) {
        super(arr);
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
                if (node.left) recurse(node.left, node);
                else node.left = new Node(value);
                this.rotate_right(node);
            }
            else {
                if (node.right) recurse(node.right, node);
                else node.right = new Node(value);
                this.rotate_left(node);
            }
        }
        return recurse(this.root);
    }
    /** 
    * Returns the node from the tree containing the given value
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    find(value) {
        if (!this.root) return null;
        // traverse the tree looking for the value
        let recurse = (node = null) => {
            if (!node) return null;
            if (value === node.value) return node;
            if (value < node.value) {
                let tmp = recurse(node.left);
                this.rotate_right(node);
                return tmp;
            }
            else {
                let tmp = recurse(node.right);
                this.rotate_left(node);
                return tmp;
            }
        }
        return recurse(this.root);
    }
}

export default Splay;