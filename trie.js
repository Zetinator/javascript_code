/**
* The classical node structure for the double linked tree
*/
class Node {
    constructor(value = null) {
        this.value = value;
        this.children = new Map();
    }
}
/**
* The classical single linked tree
*/
class Trie {
    /** 
    * Builds the linked tree from an iterable collection
    * @param {*} value the value to look for
    */
    constructor(arr = []) {
        this.root = null;
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
        if (!value) return;
        // trivial case: empty trie
        if (!this.root) {
            this.root = new Node();
        }
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
    * @return {?Node} the node containing the value if found...
    */
    find(value) {
        if(!this.root) return null;
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
    * Returns a string representation of the values from the linked tree
    * @return {string} the node containing the value if found...
    */
    toString() {
        if (!this.root) return '';
        let output = []
        function traverse(node, l = 0) {
            // if we are in a leaf we are document...
            if (node.value || node.children.size === 0) {
                output.push(`\n${Array(l).fill('\t').join('')}${node.value}`);
            }
            // explore the children
            for (let [k, child] of node.children.entries()){
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