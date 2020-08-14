import bubble_sort from './bubble_sort';

test('able to sort an empty array', () => {
    expect(bubble_sort([])).toStrictEqual([]);
});
test('able to sort an array of numbers', () => {
    expect(bubble_sort([1])).toStrictEqual([1]);
});
test('able to sort an array of numbers', () => {
    expect(bubble_sort([2, 1])).toStrictEqual([1, 2]);
});
test('able to sort an array of numbers', () => {
    expect(bubble_sort([5, 2, 6, 9])).toStrictEqual([2, 5, 6, 9]);
});
test('able to sort an array of numbers', () => {
    expect(bubble_sort([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10])).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
});
test('able to sort an array of numbers', () => {
    expect(bubble_sort([7, 12, 16, 17, 18, 14, 8, 2, 5, 4, 6, 19, 15, 1, 9, 13, 10, 11, 3, 0])).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
});
test('able to sort an array of numbers', () => {
    expect(bubble_sort([11, 13, 16, 1, 4, 15, 5, 18, 0, 7, 19, 9, 8, 10, 14, 3, 12, 2, 17, 6])).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
});
test('able to sort an array of letters', () => {
    expect(bubble_sort(['c', 'b', 'z'])).toStrictEqual(['b', 'c', 'z']);
});
test('able to sort an array with words', () => {
    expect(bubble_sort(['kim', 'sophia', 'marion'])).toStrictEqual(["kim", "marion", "sophia"]);
});