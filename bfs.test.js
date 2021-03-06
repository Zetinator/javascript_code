import bfs from "./bfs";
import UGraph from "./u_graph";

test('create a bfs from an empty collection', () => {
    let u_graph = new UGraph(new Map());
    expect(bfs(u_graph)).toStrictEqual([]);
});
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
tmp.set('m', ['n']);
tmp.set('n', ['m']);
// build our graph
let u_graph = new UGraph(tmp);
// test on this graph
test('find all connected components from petersen graph + 2 unconnected', () => {
    expect(JSON.stringify(bfs(u_graph))).toStrictEqual('[["a","f","d","c","j","g","i","b","h","e"],["m","n"]]');
});