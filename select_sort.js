/** 
* this function will sort a collection object
* @summary https://en.wikipedia.org/wiki/Selection_sort
* @param {Array} arr - array to be sorted
* @return {Array} sorted array
*/
function select_sort(arr = []) {
    if (!arr?.length) return arr;
    for (let i = 0; i < arr.length - 1; i++) {
        let pivot = i + 1;
        while (pivot > 0 && arr[pivot-1] > arr[pivot]) {
            // swap
            [arr[pivot-1], arr[pivot]] = [arr[pivot], arr[pivot-1]];
            pivot -= 1;
        }
    }
    return arr;
};

export default select_sort;