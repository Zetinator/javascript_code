/** 
* find the right insertion index of an ordered array 
* @summary https://en.wikipedia.org/wiki/Binary_search_algorithm
* @param {Array} arr arra of ordered elements
* @param {*} value value to look for
* @return {boolean} found or not
*/
function bisect_right(arr = [], value = null) {
    if (!arr?.length || value == null) return false;
    let [l, r] = [0, arr.length];
    while (l < r) {
        let m = Math.trunc((l + r) / 2);
        if (value < arr[m]) {
            r = m;
        }
        else {
            l = m + 1;
        }
    }
    return l;
};
/** 
* find the left insertion index of an ordered array 
* @summary https://en.wikipedia.org/wiki/Binary_search_algorithm
* @param {Array} arr arra of ordered elements
* @param {*} value value to look for
* @return {boolean} found or not
*/
function bisect_left(arr = [], value = null) {
    if (!arr?.length || value == null) return false;
    let [l, r] = [0, arr.length];
    while (l < r) {
        let m = Math.trunc((l + r) / 2);
        if (value > arr[m]) {
            l = m + 1;
        }
        else {
            r = m;
        }
    }
    return l;
};
/** 
* find if the element is present in an array of ordered elements with binary search O(log(n))
* @summary https://en.wikipedia.org/wiki/Binary_search_algorithm
* @param {Array} arr arra of ordered elements
* @param {*} value value to look for
* @return {boolean} found or not
*/
function bs(arr = [], value = null) {
    if (!arr?.length || value == null) return false;
    let [l, r] = [0, arr.length];
    while (l < r) {
        let m = Math.trunc((l + r) / 2);
        if (arr[m] === value) return true;
        if (value < arr[m]) {
            r = m;
        }
        else {
            l = m + 1;
        }
    }
    return false;
};

export {bisect_left, bisect_right};
export default bs;