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
    let trie = new Trie(['erika', 'erick', 'sophia', 'marion']);
    // remove from the begining
    trie.remove('erika');
    trie.remove('erick');
    trie.remove('sophia');
    trie.remove('marion');
    expect(trie.toString()).toStrictEqual("");
});