import AVL from "./avl";

test('create a AVL from an empty collection', () => {
    let avl = new AVL([]);
    expect(avl.toString()).toStrictEqual('');
});
test('create a AVL from an array of numbers', () => {
    /*
                -> (19)
            -> (18)
                -> (17)
        -> (16)
                -> (15)
            -> (14)
    -> (13)
                    -> (12)
                -> (11)
                    -> (10)
            -> (9)
                    -> (8)
                -> (7)
                    -> (6)
        -> (5)
                -> (4)
                    -> (3)
            -> (2)
                    -> (1)
                -> (0)
    */
    let avl = new AVL([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(avl.toString()).toStrictEqual("\t\t\t-> (19)\n\t\t-> (18)\n\t\t\t-> (17)\n\t-> (16)\n\t\t\t-> (15)\n\t\t-> (14)\n-> (13)\n\t\t\t\t-> (12)\n\t\t\t-> (11)\n\t\t\t\t-> (10)\n\t\t-> (9)\n\t\t\t\t-> (8)\n\t\t\t-> (7)\n\t\t\t\t-> (6)\n\t-> (5)\n\t\t\t-> (4)\n\t\t\t\t-> (3)\n\t\t-> (2)\n\t\t\t\t-> (1)\n\t\t\t-> (0)");
});
test('create a AVL from an array of words', () => {
    let avl = new AVL(['erick', 'sophia', 'marion']);
    expect(avl.toString()).toStrictEqual("\t-> (sophia)\n-> (marion)\n\t-> (erick)");
});
test('test find method', () => {
    let avl = new AVL(['erick', 'sophia', 'marion']);
    expect(avl.find('erick').value).toStrictEqual('erick');
});
test('test remove method', () => {
    let avl = new AVL(['erick', 'sophia', 'marion']);
    // remove from the begining
    expect(avl.remove('erick').value).toStrictEqual('erick');
    expect(avl.remove('sophia').value).toStrictEqual('sophia');
    expect(avl.remove('marion').value).toStrictEqual('marion');
    expect(avl.toString()).toStrictEqual("");
});