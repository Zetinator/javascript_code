import WGraph from "./w_graph";
import floyd_warshall from "./floyd_warshall";

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
test('find shortest path from 0 to 5', () => {
    let distances = floyd_warshall(w_graph);
    expect(distances.get(0).get(5)).toStrictEqual(14);
});
test('find shortest path from 1 to 4', () => {
    let distances = floyd_warshall(w_graph);
    expect(distances.get(1).get(4)).toStrictEqual(19);
});