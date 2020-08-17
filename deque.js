/**
* The classical node structure for the double linked list
*/
class Node {
    constructor(value = null) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
/**
* The classical single linked list
*/
class Deque {
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
    * Pops a node from the start of the list
    * @return {?Node} the node containing the value if found...
    */
    popleft() {
        // trivial case: empty list
        if (!this.head) {
            return null;
        }
        // general case:
        let output = this.head;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        return output;
    }
    /** 
    * Pops a node from the end of the list
    * @return {?Node} the node containing the value if found...
    */
    pop() {
        // trivial case: empty list
        if (!this.head) {
            return null;
        }
        // general case:
        let output = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        return output;
    }
    /** 
    * Appends a new node with the given value to the start of the list
    * @param {*} value the value to look for
    * @return {?Node} the node containing the value if found...
    */
    appendleft(value) {
        // trivial case: empty list
        if (!this.head) {
            this.head = new Node(value);
            this.tail = this.head;
            return;
        }
        // general case:
        let tmp = this.head;
        this.head = new Node(value);
        // connect
        tmp.prev = this.head;
        this.head.next = tmp;
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
            return;
        }
        // general case:
        let tmp = this.tail;
        this.tail = new Node(value);
        // connect
        this.tail.prev = tmp;
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
                // update connections
                node.next = node.next.next;
                if (node.next) node.next.prev = node;
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

export default Deque;