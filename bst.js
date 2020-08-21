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
*/
class BST {
    /** 
    * Builds the linked tree from an iterable collection
    * @param {*} value the value to look for
    */
    constructor(arr = []) {
        this.root = null;
        // build the linked tree from the arr
        for (let e of arr) {
            this.insert(e);
        }
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
        function recurse(node = null) {
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
        }
        return recurse(this.root);
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
        }
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
            
        }
        return move_till_leaf(node, parent);
    }
    /** 
    * Returns the node from the tree containing the max value
    * @return {?Node} the node containing the max value if found...
    */
    max() {
        if (!this.root) return null;
        let node = this.root;
        while (node.right) {
            node = node.right;
        }
        return node;
    }
    /** 
    * Returns the node from the tree containing the min value
    * @return {?Node} the node containing the min value if found...
    */
    min() {
        if (!this.root) return null;
        let node = this.root;
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    /** 
    * Returns the node from the tree containing the successor of the given value
    * @param {*} value the value to look for
    * @return {?Node} the node containing the successor of the given value if found...
    */
    successor(value) {
        if (!this.root) return null;
        // traverse the tree looking for the value
        function recurse(node = null, checkpoint = null) {
            if (!node) return [node, checkpoint];
            if (value === node.value) return [node, checkpoint];
            if (value < node.value) {
                return recurse(node.left, node);
            }
            else {
                return recurse(node.right, checkpoint);
            }
        }
        let [node, checkpoint] = recurse(this.root);
        if (!node || !node.right) return checkpoint;
        node = node.right;
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    /** 
    * Returns the node from the tree containing the predecessor of the given value
    * @param {*} value the value to look for
    * @return {?Node} the node containing the predecessor of the given value if found...
    */
    predecessor(value) {
        if (!this.root) return null;
        // traverse the tree looking for the value
        function recurse(node = null, checkpoint = null) {
            if (!node) return [node, checkpoint];
            if (value === node.value) return [node, checkpoint];
            if (value < node.value) {
                return recurse(node.left, checkpoint);
            }
            else {
                return recurse(node.right, node);
            }
        }
        let [node, checkpoint] = recurse(this.root);
        if (!node || !node.left) return checkpoint;
        node = node.left;
        while (node.right) {
            node = node.right;
        }
        return node;
    }
    /** 
    * Returns the node from the tree containing the given value
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    find(value) {
        if (!this.root) return null;
        // traverse the tree looking for the value
        function recurse(node = null) {
            if (!node) return null;
            if (value === node.value) return node;
            if (value < node.value) {
                return recurse(node.left);
            }
            else {
                return recurse(node.right);
            }
        }
        return recurse(this.root);
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
            output.push(`${Array(l).fill('\t').join('')}-->(${node.value})`);
            traverse(node.left, l + 1);
        }
        traverse(this.root);
        return output.join('\n');
    }
}

export default BST;