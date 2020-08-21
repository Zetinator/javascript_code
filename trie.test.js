import Trie from "./trie";

test('create a Trie from an empty collection', () => {
    let trie = new Trie([]);
    expect(trie.toString()).toStrictEqual('');
});
test('create a Trie from an array of words', () => {
    let trie = new Trie(['erick', 'sophia', 'marion']);
    // expect(trie.toString()).toStrictEqual("\t-->(sophia)\n-->(marion)\n\t-->(erick)");
});
test('test find method', () => {
    let trie = new Trie(['erick', 'sophia', 'marion']);
    expect(trie.find('erick').value).toStrictEqual('erick');
});
test('test remove method', () => {
    let trie = new Trie(['erick', 'sophia', 'marion']);
    // remove from the begining
    //expect(trie.remove('erick').value).toStrictEqual('erick');
    //expect(trie.remove('sophia').value).toStrictEqual('sophia');
    //expect(trie.remove('marion').value).toStrictEqual('marion');
    //expect(trie.toString()).toStrictEqual("");
});