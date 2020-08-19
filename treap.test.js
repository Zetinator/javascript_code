import Treap from "./treap";

test('create a Treap from an empty collection', () => {
    let treap = new Treap([]);
    expect(treap.toString()).toStrictEqual('');
});
test('create a Treap from an array of numbers', () => {
    let treap = new Treap([13, 2, 16, 12, 0, 19, 5, 4, 1, 18, 14, 7, 3, 17, 6, 15, 8, 9, 11, 10]);
    expect(treap.toString()).toBeTruthy();
});
test('create a Treap from an array of words', () => {
    let treap = new Treap(['erick', 'sophia', 'marion']);
    expect(treap.toString()).toBeTruthy();
});
test('test find method', () => {
    let treap = new Treap(['erick', 'sophia', 'marion']);
    expect(treap.find('erick').value).toStrictEqual('erick');
});
test('test remove method', () => {
    let treap = new Treap(['erick', 'sophia', 'marion']);
    // remove from the begining
    expect(treap.remove('erick').value).toStrictEqual('erick');
    expect(treap.remove('sophia').value).toStrictEqual('sophia');
    expect(treap.remove('marion').value).toStrictEqual('marion');
    expect(treap.toString()).toStrictEqual("");
});