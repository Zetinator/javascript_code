import BST from "./bst";

test('create a BST from an empty collection', () => {
    let bst = new BST([]);
    expect(bst.toString()).toStrictEqual('');
});
test('create a BST from an array of numbers', () => {
    let bst = new BST([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(bst.toString()).toStrictEqual("\t\t-->(19)\n\t\t\t-->(18)\n\t\t\t\t-->(17)\n\t-->(16)\n\t\t\t-->(15)\n\t\t-->(14)\n-->(13)\n\t\t-->(12)\n\t\t\t\t\t\t\t-->(11)\n\t\t\t\t\t\t\t\t-->(10)\n\t\t\t\t\t\t-->(9)\n\t\t\t\t\t-->(8)\n\t\t\t\t-->(7)\n\t\t\t\t\t-->(6)\n\t\t\t-->(5)\n\t\t\t\t-->(4)\n\t\t\t\t\t-->(3)\n\t-->(2)\n\t\t\t-->(1)\n\t\t-->(0)");
});
test('find min in the tree', () => {
    let bst = new BST([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(bst.min().value).toStrictEqual(0);
});
test('find predecessor in the tree', () => {
    let bst = new BST([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(bst.predecessor(14).value).toStrictEqual(13);
    bst.remove(13);
    expect(bst.predecessor(14).value).toStrictEqual(12);
    expect(bst.predecessor(13).value).toStrictEqual(12);
});
test('find successor in the tree', () => {
    let bst = new BST([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(bst.successor(14).value).toStrictEqual(15);
    bst.remove(15);
    expect(bst.successor(14).value).toStrictEqual(16);
    expect(bst.successor(15).value).toStrictEqual(16);
});
test('find min in the tree', () => {
    let bst = new BST([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(bst.max().value).toStrictEqual(19);
});
test('create a BST from an array of words', () => {
    let bst = new BST(['erick', 'sophia', 'marion']);
    expect(bst.toString()).toStrictEqual("\t-->(sophia)\n\t\t-->(marion)\n-->(erick)");
});
test('test find method', () => {
    let bst = new BST(['erick', 'sophia', 'marion']);
    expect(bst.find('erick').value).toStrictEqual('erick');
});
test('test remove method', () => {
    let bst = new BST(['erick', 'sophia', 'marion']);
    // remove from the begining
    expect(bst.remove('erick').value).toStrictEqual('erick');
    expect(bst.remove('sophia').value).toStrictEqual('sophia');
    expect(bst.remove('marion').value).toStrictEqual('marion');
    expect(bst.toString()).toStrictEqual("");
});