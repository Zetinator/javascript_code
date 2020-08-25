import FenwickTree from "./fenwick_tree";

test('create a FenwickTree from an empty collection', () => {
    let fenwick_tree = new FenwickTree([]);
    expect(fenwick_tree.toString()).toStrictEqual('[]');
});
test('create a FenwickTree from an array of numbers', () => {
    let fenwick_tree = new FenwickTree([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(fenwick_tree.toString()).toStrictEqual("[13,15,16,43,0,19,5,71,1,19,14,40,3,20,6,152,8,17,11,38]");
});
test('find sum in the range 2, 5', () => {
    let fenwick_tree = new FenwickTree([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(fenwick_tree.sum(2, 5)).toStrictEqual(31);
});
test('find sum in the range 5', () => {
    let fenwick_tree = new FenwickTree([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(fenwick_tree.sum(5)).toStrictEqual(62);
});
test('find min in the range 0, 0', () => {
    let fenwick_tree = new FenwickTree([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(fenwick_tree.sum(0, 0)).toStrictEqual(0);
});