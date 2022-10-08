class Graph {
    public adjacencyList: any;

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string | number): boolean {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1: string | number, vertex2: string | number): boolean {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1: string | number, vertex2: string | number): boolean {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
            .filter((v: string|number) => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
            .filter((v: string|number) => v !== vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex: string | number): any |undefined {
        if (!this.adjacencyList[vertex]) {
            return undefined;
        }
        while(this.adjacencyList[vertex].length) {
            let tmp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, tmp);
        }
        delete this.adjacencyList[vertex];
        return this;
    }
}

let myGraph = new Graph;

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

myGraph.addEdge("A", "B");   //   A -  - B
myGraph.addEdge("B", "D");   //   |\     |
myGraph.addEdge("D", "A");   //   |  \   |
myGraph.addEdge("D", "C");   //   |    \ |
myGraph.addEdge("C", "A");   //   C -  - D 

myGraph.removeVertex("D");   //  A - - B
                             //  |
                             //  |
                             //  |
                             //  C

// myGraph.removeEdge("C", "A");

console.log(myGraph);
