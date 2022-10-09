# What is the difference between tree search and graph search?
>There is always a lot of confusion about this concept, because the naming is misleading, given that both tree and graph searches produce a tree (from which you can derive a path) while exploring the search space, which is usually represented as a graph.

## Differences:
> Firstly, we have to understand that the underlying problem (or search space) is almost always represented as a graph (although the underlying graph may not contain cycles, so it may represent a tree). So, the difference is not whether the problem is a tree (a special kind of graph), or a general graph!
> The distinction is, instead, how we are traversing the search space (represented as a graph) to search for our goal state and whether we are using an additional list (called the closed list) or not.

## So, the basic **differences** are:
> *  I. In the case of a graph search, we use a list, called the closed list (also called explored set), to keep track of the nodes that have already been visited and expanded, so that they are not visited and expanded again.
> * II. In the case of a tree search, we do not keep this closed list. Consequently, the same node can be visited multiple (or even infinitely many) times, which means that the produced tree (by the tree search) may contain the same node multiple times.

## Advantages and disadvantages:
> The **advantage** of graph search obviously is that, if we finish the search of a node, we will never search it again. On the other hand, the tree search can visit the same node multiple times.

> The **disadvantage** of graph search is that it uses more memory (which we may or may not have) than tree search. This matters because graph search actually has exponential memory requirements in the worst case, making it impractical without either a really good search heuristic or an extremely simple problem.

> * So, there is a **trade-off** between space and time when using graph search as opposed to tree search (or vice-versa).

## Conclusion:
> So, the difference between tree search and graph search is **not** that tree search works on trees while graph search works on graphs! Both can work on trees or graphs (but, given that graphs are a generalization of trees, we can simply say that both work on graphs, either trees or not) and both produce a tree!
