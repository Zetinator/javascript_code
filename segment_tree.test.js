import SegmentTree from "./segment_tree";

test('create a SegmentTree from an empty collection', () => {
    let segment_tree = new SegmentTree([]);
    expect(segment_tree.toString()).toStrictEqual('');
});
test('create a SegmentTree from an array of numbers', () => {
    let segment_tree = new SegmentTree([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(segment_tree.toString()).toStrictEqual("\t\t\t\t-->(10)[19,19]\n\t\t\t-->(10)[18,19]\n\t\t\t\t-->(11)[18,18]\n\t\t-->(8)[15,19]\n\t\t\t\t-->(9)[17,17]\n\t\t\t-->(8)[15,17]\n\t\t\t\t\t-->(8)[16,16]\n\t\t\t\t-->(8)[15,16]\n\t\t\t\t\t-->(15)[15,15]\n\t-->(3)[10,19]\n\t\t\t\t-->(6)[14,14]\n\t\t\t-->(6)[13,14]\n\t\t\t\t-->(17)[13,13]\n\t\t-->(3)[10,14]\n\t\t\t\t-->(3)[12,12]\n\t\t\t-->(3)[10,12]\n\t\t\t\t\t-->(7)[11,11]\n\t\t\t\t-->(7)[10,11]\n\t\t\t\t\t-->(14)[10,10]\n-->(0)[0,19]\n\t\t\t\t-->(18)[9,9]\n\t\t\t-->(1)[8,9]\n\t\t\t\t-->(1)[8,8]\n\t\t-->(1)[5,9]\n\t\t\t\t-->(4)[7,7]\n\t\t\t-->(4)[5,7]\n\t\t\t\t\t-->(5)[6,6]\n\t\t\t\t-->(5)[5,6]\n\t\t\t\t\t-->(19)[5,5]\n\t-->(0)[0,9]\n\t\t\t\t-->(0)[4,4]\n\t\t\t-->(0)[3,4]\n\t\t\t\t-->(12)[3,3]\n\t\t-->(0)[0,4]\n\t\t\t\t-->(16)[2,2]\n\t\t\t-->(2)[0,2]\n\t\t\t\t\t-->(2)[1,1]\n\t\t\t\t-->(2)[0,1]\n\t\t\t\t\t-->(13)[0,0]");
});
test('find min in the range 2, 5', () => {
    let segment_tree = new SegmentTree([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(segment_tree.query_min(2, 5)).toStrictEqual(0);
});
test('find min in the range 11, 13', () => {
    let segment_tree = new SegmentTree([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(segment_tree.query_min(11, 13)).toStrictEqual(3);
});
test('find min in the range 0, 14', () => {
    let segment_tree = new SegmentTree([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(segment_tree.query_min(0, 14)).toStrictEqual(0);
});