import LinkedList from "./linked_list";

test('create a LinkedList from an empty collection', () => {
    let ll = new LinkedList([]);
    expect(ll.toString()).toStrictEqual('');
});
test('create a LinkedList from an array of numbers', () => {
    let ll = new LinkedList([5, 6, 3, 7, 2, 9]);
    expect(ll.toString()).toStrictEqual("(5)->(6)->(3)->(7)->(2)->(9)");
});
test('create a LinkedList from an array of words', () => {
    let ll = new LinkedList(['erick', 'sophia', 'marion']);
    expect(ll.toString()).toStrictEqual("(erick)->(sophia)->(marion)");
});
test('test find method', () => {
    let ll = new LinkedList(['erick', 'sophia', 'marion']);
    expect(ll.find('erick').value).toStrictEqual('erick');
});
test('test remove method', () => {
    let ll = new LinkedList(['erick', 'sophia', 'marion']);
    // remove from the begining
    ll.remove('erick')
    expect(ll.toString()).toStrictEqual("(sophia)->(marion)");
    // remove from the end
    ll.remove('marion')
    expect(ll.toString()).toStrictEqual("(sophia)");
    expect(ll.tail === ll.tail).toStrictEqual(true);
});