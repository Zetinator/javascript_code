/**
* The classical node structure
*/
class Node {
    constructor(value = null) {
        this.value = value;
        this.children = new Map();
    }
}
/**
* https://en.wikipedia.org/wiki/Trie
*/
class Trie {
    /** 
    * Builds the linked tree from an iterable collection
    * @param {*} value the value to look for
    */
    constructor(arr = []) {
        this.root = new Node();
        for (let e of arr) {
            this.insert(e);
        }
    }
    /** 
    * Inserts a new node with the given value to the start of the tree
    * @param {*} value the to insert, (must be iterable)
    * @return {?Node} the node containing the value if found...
    */
    insert(value) {
        // general case:
        let node = this.root;
        for (let e of value) {
            if (node.children.has(e)) {
                node = node.children.get(e);
            }
            else {
                node.children.set(e, new Node());
                node = node.children.get(e);
            }
        }
        // we reached a leaf... update the value
        node.value = value;
    }
    /** 
    * Returns the node from the tree containing the given value
    * @param {*} value the value to look for
    * @return {?Array} the node containing the value if found...
    */
    predict(value) {
        if (value == null) return null;
        // traverse the trie looking for the value
        let output = [];
        let node = this.root;
        for (let e of value) {
            if (node.children.has(e)) node = node.children.get(e);
            else break;
        }
        // if not found return similar nodes
        let traverse = (node = null) => {
            if (!node) return;
            if (node.value) output.push(node);
            for (let [k, child] of node.children.entries()) {
                traverse(child);
            }
        };
        traverse(node);
        return output;
    }
    /** 
    * Returns the node from the tree containing the given value
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    find(value) {
        if (value == null) return null;
        // traverse the trie looking for the value
        let node = this.root;
        for (let e of value) {
            if (node.children.has(e)) {
                node = node.children.get(e);
            }
            if (node && value == node.value) return node;
        }
        return null;
    }
    /** 
    * Returns the node from the tree containing the given value
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    remove(value) {
        if (value == null) return null;
        // traverse the trie looking for the value
        let node = this.root;
        let traverse = (node = null) => {
            if (!node) return;
            // found? remove value
            if (value == node.value) {
                node.value = null;
                // propagate the deleting returning true
                if (node.children.size == 0) return true;
                else return;
            }
            // explore the children
            for (let [k, child] of node.children.entries()) {
                if (traverse(child)) {
                    node.children.delete(k);
                    // chain reaction?
                    if (node.value == null && node.children.size == 0) return true;
                    else return;
                }
            }
            return;
        };
        traverse(node);
    }
    /** 
    * Returns a string representation of the values from the linked tree
    * @return {string} the node containing the value if found...
    */
    toString() {
        let output = []
        function traverse(node, l = 0) {
            // if we are in a leaf we are document...
            if (node.value) {
                output.push(`\n${Array(l).fill('\t').join('')}${node.value}\n`);
                output.push(`${Array(l).fill('\t').join('')}`);
            }
            // explore the children
            for (let [k, child] of node.children.entries()) {
                output.push(`-(${k})`);
                traverse(child, l + 1);
                output.push(`\n${Array(l).fill('\t').join('')}`);
            }
        }
        traverse(this.root);
        return output.join('');
    }
}

export default Trie;