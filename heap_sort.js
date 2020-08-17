/** 
* this function will sort a collection object
* @summary https://en.wikipedia.org/wiki/Heapsort
* @param {Array} arr - array to be sorted
* @return {Array} sorted array
*/
function heap_sort(arr = []) {
    if (!arr?.length) return arr;
    // sift-down -> bubble down
    function sift_down(n, i = 0) {
        // auxiliar functions to retrive childs
        let left = (i) => (i * 2 + 1) < n ? (i * 2 + 1) : false;
        let right = (i) => (i * 2 + 2) < n ? (i * 2 + 2) : false;
        // if it has childs and any of the childs are smaller than the parent
        while ((left(i) && arr[left(i)] > arr[i]) || (right(i) && arr[right(i)] > arr[i])) {
            let choosen_child = left(i);
            // we keep the smaller of the childs
            if (right(i) && arr[right(i)] > arr[left(i)]) {
                choosen_child = right(i);
            }
            // swap
            [arr[choosen_child], arr[i]] = [arr[i], arr[choosen_child]];
            i = choosen_child;
        }
    }
    // heapify
    let n = arr.length;
    for (let i = Math.trunc(n / 2); i >= 0; i--) {
        sift_down(n, i);
    }
    // swap current max with the right edge
    for (let n = arr.length - 1; n >= 0; n--) {
        [arr[n], arr[0]] = [arr[0], arr[n]];
        sift_down(n);
    }
    return arr;
};

export default heap_sort;