/**
* Fischer's invention
* https://en.wikipedia.org/wiki/Disjoint-set_data_structure
*/
class DisjointSet {
    /** 
    * Builds the linked tree from an iterable collection
    * @param {*} value the value to look for
    */
    constructor() {
        this.core = new Map();
    }
    /** 
    * https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Finding_set_representatives
    * @param {*} value value to look for
    */
    find(value) {
        let fetch = (key) => {
            // no more parents to follow? we are done
            if (!this.core.has(key) || this.core.get(key) == key) return key;
            // apply optimization to shortcut parents (path compression)
            this.core.set(key, fetch(this.core.get(key)));
            return this.core.get(key);
        }
        return fetch(value);
    }
    /** 
    * https://en.wikipedia.org/wiki/Disjoint-set_data_structure#Merging_two_sets
    * @param {*} value the node used as key
    * @param {*} value the node used as parent
    */
    union(k_1, k_2) {
        if (k_1 == null || k_2 == null) return;
        let [kk_1, kk_2] = [this.find(k_1), this.find(k_2)];
        // same ancestor? we are done
        if (kk_1 == kk_2) return;
        // simple optimization use the shorter one when adding a new item
        if (k_1 == kk_1) this.core.set(k_1, kk_2);
        else this.core.set(k_2, kk_1);
    }
    /** 
    * Returns a string representation of the values from the linked tree
    * @return {string} the node containing the value if found...
    */
    toString() {
        if (this.core.size == 0) return '';
        return JSON.stringify(Array.from(this.core.entries()));
    }
}

export default DisjointSet;