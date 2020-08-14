/** 
* this function will sort a collection object
* @summary https://en.wikipedia.org/wiki/Bubble_sort
* @param {Array} arr - array to be sorted
* @return {Array} sorted array
*/
function bubble_sort(arr = []) {
    if (!arr?.length) return arr;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

export default bubble_sort;