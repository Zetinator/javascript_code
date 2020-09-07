import UGraph from './u_graph'
/** 
* this function will explore and find all the strongly connected components
* @summary https://en.wikipedia.org/wiki/Strongly_connected_component
* @param {UGraph} graph graph to explore
* @return {Array} Array with the groups of connected components
*/
function strongly_connected(u_graph = new Map()) {
    if (u_graph.inner_graph.size == 0) return [];
    let [scc, stack] = [[], []];
    let [marks, lowers] = [new Map(), new Map()];
    let index = 0;
    // actual tarjan's algorithm
    let tarjan = (node = null) => {
        marks.set(node, index);
        lowers.set(node, index);
        stack.push(index);
        // increment global counter after marking a new node
        index += 1;
        //explore children
        for (let child of u_graph.neighbors(node)) {
            if (!marks.has(child)) tarjan(child);
            // update lowers
            lowers.set(node, Math.min(lowers.get(node), lowers.get(child)));
        }
        // check if we are dealing with a root of a scc
        if (lowers.get(node) == marks.get(node)) {
            // pop until this node's index comes out
            let tmp = [];
            while (stack.length > 0 && stack[stack.length - 1] != marks.get(node)) {
                tmp.push(stack.pop());
            }
            tmp.push(stack.pop());
            // add group of strongly connected components found
            scc.push(tmp);
        }
    }
    // call tarjan's on all the nodes
    for (let node of u_graph.nodes) {
        if (!marks.has(node)) tarjan(node);
    }
    return scc;
};

export default strongly_connected;