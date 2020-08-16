/**
* The classical node structure for the linked lists
*/
class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}
/**
* The classical single linked list
*/
class LinkedList {
    /** 
    * Builds the linked list from an iterable collection
    * @param {*} value the value to look for
    */
    constructor(arr = []) {
        this.head = null;
        this.tail = null;
        // build the linked list from the arr
        for (let e of arr) {
            this.append(e);
        }
    }
    /** 
    * Appends a new node with the given value to the end of the list
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    append(value) {
        // trivial case: empty list
        if (!this.head) {
            this.head = new Node(value);
            this.tail = this.head;
            return
        }
        // general case:
        let tmp = this.tail;
        this.tail = new Node(value);
        tmp.next = this.tail;
    }
    /** 
    * Removes first occurrence of value.
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    remove(value) {
        if (value == null) return null;
        let dummy_head = new Node(null);
        dummy_head.next = this.head;
        let node = dummy_head;
        // traverse the list
        while (node.next) {
            if (node.next.value === value) {
                let output = node.next;
                node.next = node.next.next;
                // update head
                this.head = dummy_head.next;
                // update tail
                if (output == this.tail) this.tail = node;
                return output;
            }
            node = node.next;
        }
        return null;
    }
    /** 
    * Returns the node from the list containing the given value
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    find(value) {
        if (value == null) return null;
        let node = this.head;
        // traverse the list
        while (node) {
            if (node.value === value) return node;
            node = node.next;
        }
        return null;
    }
    /** 
    * Returns a string representation of the values from the linked list
    * @return {string} the node containing the value if found...
    */
    toString() {
        let output = []
        let node = this.head;
        while (node) {
            output.push(`(${node.value})`);
            node = node.next;
        }
        return output.join('->')
    }

}

export default LinkedList;