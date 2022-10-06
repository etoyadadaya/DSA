# Binary Search:
> * Compare x with the middle element.
> * If x matches with the middle element, we return the mid index.
> * Else If x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
> * Else (x is smaller) recur for the left half.
#### Time Complexity: O(log n)

# Selection Sort:
> * One loop to select an element of Array one by one = O(N)
> * Another loop to compare that element with every other Array element = O(N)
> * result: O(N) * O(N) = O(N*N) = O(N^2)

#### Time Complexity: O(N^2)
#### not stable sorting algorithm

# Insertion Sort:
> * One loop to select an element of Array one by one = O(N)
> * Another loop to compare that element with every other Array element = O(N)
> * result: O(N) * O(N) = O(N*N) = O(N^2)

#### Time Complexity: O(N^2)
#### stable sorting algorithm

# Quick Sort:
#### Time Complexity: O(n log(n))
#### not stable sorting algorithm
##### *better for sorting arrays than Merge Sort*

# Breadth First Search (BFS):
A standard BFS implementation puts each vertex of the graph into one of two categories:

> * 1 - Visited
> * 2 - Not Visited

The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

The algorithm works as follows:

> * Start by putting any one of the graph's vertices at the back of a queue.
> * Take the front item of the queue and add it to the visited list.
> * Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the back of the queue.
> * Keep repeating steps 2 and 3 until the queue is empty.

The graph might have two different disconnected parts so to make sure that we cover every vertex, we can also run the BFS algorithm on every node.

#### Time Complexity: O(V + E), where V is the number of nodes and E is the number of edges.
#### The space complexity of the algorithm is O(V).
#### BFS Algorithm Applications:
> * For GPS navigation , Path finding algorithms, In Ford-Fulkerson algorithm to find maximum flow in a network, etc...

# Depth First Search (DFS):
A standard DFS implementation puts each vertex of the graph into one of two categories:

> * 1 - Visited
> * 2 - Not Visited

The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.

The DFS algorithm works as follows:

> * Start by putting any one of the graph's vertices on top of a stack.
> * Take the top item of the stack and add it to the visited list.
> * Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.
> * Keep repeating steps 2 and 3 until the stack is empty.

#### Time Complexity: O(V + E), where V is the number of nodes and E is the number of edges.
#### The space complexity of the algorithm is O(V).
#### DFS Algorithm Applications:
> * For finding the path, To test if the graph is bipartite,For finding the strongly connected components of a graph, For detecting cycles in a graph.
