import Deque from "./deque";

test('create a Deque from an empty collection', () => {
    let ll = new Deque([]);
    expect(ll.toString()).toStrictEqual('');
});
test('create a Deque from an array of numbers', () => {
    let ll = new Deque([5, 6, 3, 7, 2, 9]);
    expect(ll.toString()).toStrictEqual("(5)->(6)->(3)->(7)->(2)->(9)");
});
test('create a Deque from an array of words', () => {
    let ll = new Deque(['erick', 'sophia', 'marion']);
    expect(ll.toString()).toStrictEqual("(erick)->(sophia)->(marion)");
});
test('test find method', () => {
    let ll = new Deque(['erick', 'sophia', 'marion']);
    expect(ll.find('erick').value).toStrictEqual('erick');
});
test('test remove method', () => {
    let ll = new Deque(['erick', 'sophia', 'marion']);
    // remove from the begining
    ll.remove('erick');
    expect(ll.toString()).toStrictEqual("(sophia)->(marion)");
    // remove from the end
    ll.remove('marion');
    expect(ll.toString()).toStrictEqual("(sophia)");
    expect(ll.tail === ll.tail).toStrictEqual(true);
});
test('test appendleft method', () => {
    let ll = new Deque(['erick', 'sophia', 'marion']);
    // remove from the begining
    ll.appendleft('kim');
    expect(ll.toString()).toStrictEqual("(kim)->(erick)->(sophia)->(marion)");
});
test('test pop/popleft method', () => {
    let ll = new Deque(['erick', 'sophia', 'marion']);
    // remove from the begining
    ll.popleft();
    expect(ll.toString()).toStrictEqual("(sophia)->(marion)");
    // remove from the end
    ll.pop();
    expect(ll.toString()).toStrictEqual("(sophia)");
    expect(ll.tail === ll.tail).toStrictEqual(true);
});