// Graph Initialization

const graph: any = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];


// breadthFirstSearch which check for element in graph.

const breadthFirstSearchIncludeElem = (graph: any, start: string, end: string): boolean => {
    let queue = [];
    queue.push(start);

    while (queue.length > 0) {
        const current: string = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        } else if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
    return false;
}

console.log(breadthFirstSearchIncludeElem(graph, 'a', 'g'))


// breadthFirstSearch which check for element in graph.

const breadthFirstSearchStepsCount = (graph: any, start: string, end: string): number => {
    let queue = [];
    let count = 0;
    queue.push(start);

    while (queue.length > 0) {
        count++;
        const current: string = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        } else if (graph[current].includes(end)) {
            return count;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }
    return -1;
}

console.log(breadthFirstSearchStepsCount(graph, 'a', '4'))
