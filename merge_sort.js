/** 
* this function will sort a collection object
* @summary https://en.wikipedia.org/wiki/merge_sort
* @param {Array} arr - array to be sorted
* @return {Array} sorted array
*/
function merge_sort(arr = []) {
    if (!arr?.length) return arr;
    function recurse(sub_arr = []) {
        if (!sub_arr?.length || sub_arr.length < 2) return sub_arr;
        // divide
        let m = Math.trunc(sub_arr.length / 2)
        let [left, right] = [recurse(sub_arr.slice(0, m)), recurse(sub_arr.slice(m,))];
        // conquer
        let [l, r, tmp] = [0, 0, []]
        while (l < left.length && r < right.length) {
            if (right[r] < left[l]) {
                tmp.push(right[r]);
                r += 1;
            }
            else {
                tmp.push(left[l]);
                l += 1;
            }
        }
        return [...tmp, ...right.slice(r,), ...left.slice(l,)]
    };
    return recurse(arr);
};

export default merge_sort;