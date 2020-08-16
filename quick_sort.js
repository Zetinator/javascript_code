/** 
* this function will sort a collection object
* @summary https://en.wikipedia.org/wiki/Quicksort
* @param {Array} arr - array to be sorted
* @return {Array} sorted array
*/
function quick_sort(arr = []) {
    if (!arr?.length) return arr;
    function recurse(sub_arr = [], l = 0) {
        if (!sub_arr?.length || sub_arr.length < 2) return sub_arr;
        // choose a good pivot -> randomly
        let pivot = Math.trunc(Math.random() * (sub_arr.length));
        // divide
        let [left, right] = [[], []];
        for (let [i, e] of sub_arr.entries()) {
            if (i === pivot) continue;
            if (e < sub_arr[pivot]) {
                left.push(e)
            }
            else {
                right.push(e)
            }
        }
        // conquer
        return [...recurse(left, l + 1), sub_arr[pivot], ...recurse(right, l + 1)];
    };
    return recurse(arr);
};

export default quick_sort;