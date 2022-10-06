// Graph Initialization

const graph: any = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];


// breadthFirstSearch which check for element in graph.

const depthFirstSearch = (graph: any, start: any): any => {
    if (graph.length === 0) {
        return [];
    }

    const stack = [];
    stack.push(start);
    const visited: any = [];

    while (stack.length > 0) {
        const current: string = stack.pop();
        visited.push(current);

        if (!graph[current]) {
            graph[current] = [];
        } else {
            const neighbors: string = graph[current];
            for (let i = neighbors.length - 1; i >= 0; i--) {
            if (!visited.includes(neighbors[i])) {
                stack.push(neighbors[i]);
                }
            }
        }
        []
    }

    return Array.from(visited);
}

console.log(depthFirstSearch(graph, 'a'));
