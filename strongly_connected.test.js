import UGraph from "./u_graph";
import strongly_connected from "./strongly_connected";

// https://visualgo.net/en/mst
let tmp = new Map();
tmp.set(0, [1]);
tmp.set(1, [3]);
tmp.set(2, [1]);
tmp.set(3, [2, 4]);
tmp.set(4, [5]);
tmp.set(5, [7]);
tmp.set(6, [4]);
tmp.set(7, [6]);
// build our graph
let u_graph = new UGraph(tmp);
// test on this graph
test('find all the strongly connected components on the given graph', () => {
    expect(JSON.stringify(strongly_connected(u_graph))).toStrictEqual("[[7,6,5,4],[3,2,1],[0]]");
});