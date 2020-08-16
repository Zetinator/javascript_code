/** 
* this function will sort a collection object
* @summary https://en.wikipedia.org/wiki/Bubble_sort
* @param {Array} arr - array to be sorted
* @return {Array} sorted array
*/
function selection_sort(arr = []) {
    if (!arr?.length) return arr;
    for (let i = 0; i < arr.length; i++) {
        // current_min = (value, index)
        let current_min = [arr[i], i]
        // look for the min in the remainders
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < current_min[0]) {
                current_min = [arr[j], j]
            }
        }
        // update with swap
        [arr[i], arr[current_min[1]]] = [arr[current_min[1]], arr[i]];
    }
    return arr;
};

export default selection_sort;