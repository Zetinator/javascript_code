import UGraph from "./u_graph";

test('create a UGraph from an empty collection', () => {
    let u_graph = new UGraph([]);
    expect(u_graph.inner_graph.size).toStrictEqual(0);
});
test('create a UGraph from an object', () => {
    // https://en.wikipedia.org/wiki/Petersen_graph
    let tmp = new Map();
    tmp.set('a', ['f', 'd', 'c']);
    tmp.set('b', ['e', 'd', 'g']);
    tmp.set('c', ['h', 'e', 'a']);
    tmp.set('d', ['i', 'a', 'b']);
    tmp.set('e', ['j', 'b', 'c']);
    tmp.set('f', ['j', 'a', 'g']);
    tmp.set('g', ['f', 'b', 'a']);
    tmp.set('h', ['g', 'c', 'i']);
    tmp.set('i', ['d', 'i', 'h']);
    tmp.set('j', ['f', 'e', 'i']);
    // build our graph
    let u_graph = new UGraph(tmp);
    expect(u_graph.nodes.size).toStrictEqual(10);
    for (let [k, v] of u_graph.inner_graph.entries()) {
        expect(v.size).toStrictEqual(3);
    }
});
test('test get neighbors', () => {
    // https://en.wikipedia.org/wiki/Petersen_graph
    let tmp = new Map();
    tmp.set('a', ['f', 'd', 'c']);
    tmp.set('b', ['e', 'd', 'g']);
    tmp.set('c', ['h', 'e', 'a']);
    tmp.set('d', ['i', 'a', 'b']);
    tmp.set('e', ['j', 'b', 'c']);
    tmp.set('f', ['j', 'a', 'g']);
    tmp.set('g', ['f', 'b', 'a']);
    tmp.set('h', ['g', 'c', 'i']);
    tmp.set('i', ['d', 'i', 'h']);
    tmp.set('j', ['f', 'e', 'i']);
    // build our graph
    let u_graph = new UGraph(tmp);
    let expected = new Set();
    expected.add('f');
    expected.add('d');
    expected.add('c');
    expect(u_graph.neighbors('a')).toStrictEqual(expected);
});
test('test are neighbors', () => {
    // https://en.wikipedia.org/wiki/Petersen_graph
    let tmp = new Map();
    tmp.set('a', ['f', 'd', 'c']);
    tmp.set('b', ['e', 'd', 'g']);
    tmp.set('c', ['h', 'e', 'a']);
    tmp.set('d', ['i', 'a', 'b']);
    tmp.set('e', ['j', 'b', 'c']);
    tmp.set('f', ['j', 'a', 'g']);
    tmp.set('g', ['f', 'b', 'a']);
    tmp.set('h', ['g', 'c', 'i']);
    tmp.set('i', ['d', 'i', 'h']);
    tmp.set('j', ['f', 'e', 'i']);
    // build our graph
    let u_graph = new UGraph(tmp);
    expect(u_graph.are_neighbors('a', 'c')).toStrictEqual(true);
    expect(u_graph.are_neighbors('b', 'c')).toStrictEqual(false);
});