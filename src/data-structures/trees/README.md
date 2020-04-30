# Trees

> Tree is a collection of nodes and edges. There are (nodes - 1) edges.

![tree](./tree.png)

A tree data strucure can be __defined recursively__ as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with te constraints that no reference is duplicated, and none points to the root.

Alternatively, a tree can be __defined abstractly__ as a whole as an ordered tree, with a value assigned to each node.

### Common Operations

#### Insertion

Nodes can be inserted into binary trees in between two other nodes, or added
after a leaf node. In biary trees, a node that is inserted is specified as to which child it is.

To __add a new node after leaf node `A`__, `A` assigns the new node as one of its children and the new node asigns node A as its parent.

To __add on internal nodes__ is more complex.

![insert node](./insertion.png)

#### Deletion

Nodes with zero or one children can be removed unambiguously.

![deletion](./deletion1.png)

In a binary tree, a node with two hldren cannot be deleted unambiguously. However, in certain binary trees (including _binary search trees__) these nodes can be deleted, though with a rearrangement of the tree data structure.

#### Traversal

Visit each node in a tree by _recursively visiting_ each node in the left and right subtrees of the root.

* Pre-order
* In-order
* Post-order
* Depth-first order
* Breadth-first order

#### Depth-first order

We attempt to visit the node farthest from the root that we can, but with the caveat that it must be a child of a node we have already visited. Unlike a depth-first search on graphs, tere is no need to remember all the nodes we have visited, because a tree cannot contain cycles. Pre-order is a special case of this.

#### Breadth-first-order

We attempt to visit the node closest from the root that it has not already been visited.

### Common Types

* AVL
* [Binary Tree](bt/README.md)
* [Binary Search Tree (BST)](bst/README.md)
* Huffman tree
* [K-ary tree](kary/README.md)
* Random binary tree
* Red-black tree
* Optimal binary search tree
* Self-balancing binary search tree

---
