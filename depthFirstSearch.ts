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
            const neighbor = neighbors[i];
            if (!visited.includes(neighbor)) {
                stack.push(neighbor);
                }
            }
        }
    }

    return Array.from(visited);
}

console.log(depthFirstSearch(graph, 'a'))
