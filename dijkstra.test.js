import dijkstra from "./dijkstra";
import WGraph from "./w_graph";

// https://visualgo.net/en/dfsbfs
let tmp = new Map();
tmp.set(0, [[1, 1], [2, 7]]);
tmp.set(1, [[3, 9], [5, 15]]);
tmp.set(2, [[4, 4]]);
tmp.set(3, [[5, 5], [4, 10]]);
tmp.set(4, [[5, 3]]);
tmp.set(5, []);
// build our graph
let w_graph = new WGraph(tmp);
// test on this graph
test('find all connected components from petersen graph + 2 unconnected', () => {
    expect(JSON.stringify(dijkstra(w_graph, 0, 10))).toStrictEqual("[[10],null]");
});
test('find all connected components from petersen graph + 2 unconnected', () => {
    expect(JSON.stringify(dijkstra(w_graph, 0, 5))).toStrictEqual('[[0,2,4,5],14]');
});