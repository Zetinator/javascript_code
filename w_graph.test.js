import WGraph from "./w_graph";

test('create a WGraph from an empty collection', () => {
    let w_graph = new WGraph([]);
    expect(w_graph.inner_graph.size).toStrictEqual(0);
});
// https://en.wikipedia.org/wiki/Petersen_graph
let tmp = new Map();
tmp.set('a', [['f', 1], ['d', 1], ['c', 1]]);
tmp.set('b', [['e', 1], ['d', 1], ['g', 1]]);
tmp.set('c', [['h', 1], ['e', 1], ['a', 1]]);
tmp.set('d', [['i', 1], ['a', 1], ['b', 1]]);
tmp.set('e', [['j', 1], ['b', 1], ['c', 1]]);
tmp.set('f', [['j', 1], ['a', 1], ['g', 1]]);
tmp.set('g', [['f', 1], ['b', 1], ['a', 1]]);
tmp.set('h', [['g', 1], ['c', 1], ['i', 1]]);
tmp.set('i', [['d', 1], ['i', 1], ['h', 1]]);
tmp.set('j', [['f', 1], ['e', 1], ['i', 1]]);
// build our graph
let w_graph = new WGraph(tmp);
// run tests on the petersen graph
test('create a WGraph from an object', () => {
    expect(w_graph.nodes.size).toStrictEqual(10);
    for (let [k, v] of w_graph.inner_graph.entries()) {
        expect(v.size).toStrictEqual(3);
    }
});
test('test get neighbors', () => {
    let expected = new Map();
    expected.set('f', 1);
    expected.set('d', 1);
    expected.set('c', 1);
    expect(w_graph.neighbors('a')).toStrictEqual(expected);
});
test('test get weight', () => {
    // connected
    expect(w_graph.weight('a', 'c')).toStrictEqual(1);
    // not connected
    expect(w_graph.weight('a', 'e')).toStrictEqual(Infinity);
});
test('test are neighbors', () => {
    expect(w_graph.are_neighbors('a', 'c')).toStrictEqual(true);
    expect(w_graph.are_neighbors('b', 'c')).toStrictEqual(false);
});