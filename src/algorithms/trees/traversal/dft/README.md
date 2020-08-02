# Depth-First Traversal

We attempt to visit the node farthest from the root that we can, but with the caveat that it must be a child of a node we have already visited. Unlike a depth-first search on graphs, there is no need to remember all the nodes we have visited, because a tree cannot contain cycles. Pre-order is a special case of this.

It starts at the root node (or arbitrary node in the case of a graph) and explores as far as possible along each branch before backtracking. So the search tree is deepened as much as possible on each child before going to the next sibiling.

## Depth-First Search

![DFS](https://en.wikipedia.org/wiki/File:Depth-First-Search.gif)
