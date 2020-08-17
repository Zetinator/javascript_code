import Heap from "./heap";

test('create a Heap from an empty collection', () => {
    let heap = new Heap([]);
    expect(heap.toString()).toStrictEqual("[]");
});
test('create a Heap from an array of numbers', () => {
    let heap = new Heap([5, 6, 3, 7, 2, 9]);
    expect(heap.toString()).toStrictEqual("[2,5,3,7,6,9]");
});
test('push element into the heap', () => {
    let heap = new Heap([5, 6, 3, 7, 2, 9]);
    heap.push(1);
    expect(heap.toString()).toStrictEqual("[1,5,2,7,6,9,3]");
});
test('pop element from the heap', () => {
    let heap = new Heap([5, 6, 3, 7, 2, 9]);
    expect(heap.pop()).toStrictEqual(2);
    expect(heap.toString()).toStrictEqual("[3,5,9,7,6]");
});
test('push non numeric elements', () => {
    let heap = new Heap(['erick', 'sophia', 'marion']);
    expect(heap.pop()).toStrictEqual('erick');
    expect(heap.toString()).toStrictEqual('["marion","sophia"]');
});