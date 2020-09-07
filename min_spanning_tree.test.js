import WGraph from "./w_graph";
import min_spanning_tree from "./min_spanning_tree";

// https://visualgo.net/en/mst
let tmp = new Map();
tmp.set(0, [[1, 24], [2, 13], [3, 13], [4, 22]]);
tmp.set(1, [[0, 24], [2, 22], [3, 13], [4, 13]]);
tmp.set(2, [[0, 13], [3, 19], [1, 22], [4, 14]]);
tmp.set(3, [[0, 13], [1, 13], [2, 19], [4, 19]]);
tmp.set(4, [[0, 22], [1, 13], [2, 14], [3, 19]]);
// build our graph
let w_graph = new WGraph(tmp);
// test on this graph
test('find minimum spanning tree', () => {
    expect(min_spanning_tree(w_graph)).toStrictEqual(52);
});