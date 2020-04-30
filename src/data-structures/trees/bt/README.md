# Binary Tree

Tree data structure in which each node has _at most two children_.

A recursive definition using just set theory notions is that a non-empty binary tree is a tuple `(L, S, R)` where `L` and `R` are binary trees or the empty set, and S is a singleton set.

![binary](./binary.svg)

#### Usage

* Means for accesing nodes based on some value/label associated with each node.
* Binary search trees and binary heaps (efficient searching and sorting).
* Representation of dta with a relevant bifurcating structure (common exaples occur with Huffman coding and cladograms).

#### Types of Binary Trees

Tree terminology is not well-standardized and so varies in the literature.

1. __Rooted__ bt, has a root node and every node at most two children.

2. __Full/Strict__ bt, every node has 0 or 2 children.

3. __Complete__ bt, every level except psosible the last, is completely filled, and all nodes in the last level are as far left as possible.

4. __Perfect__ bt, all interior nodes have two children and all leaves have the same depth or same level.

5. __Infinite complete__ bt, every node has two children, and so the set of levels is countably infinite.

6. __Balanced__ bt, left and right subtrees of every node differ in height by no more than 1.

7. __Degenerate__ bt, each parent node has only one associated child node. This mean that the tree will behave like a linked list data structure.


#### Properties of Binary Trees

* Number of nodes `n` in a __full binary__ tree, is at least `n = 2h + 1` and at most `n = 2^(h+1) - 1`.
* Number of leaf nodes `l` in a __perfect__ binary tree is `l = (n+1) / 2`.
* Number of nodes in a __perfect__ binary tree is `2l - 1`.
* In a __balanced full__ binary tree, `h = |log_2 (n+1)|`.
* In a __perfect__ full binaryt ree, `l = 2^h` and thus `n = 2^(h+1) - 2`.
* Number of null links in a binary tree of `n` nodes is `(n+1)`.
* Number of internal nodes in a __complete__ binary tre of n nodes is `|n / 2|`.
* For any non-empty binary tree with `n_0` leaf nodes and `n_2` nodes of degree 2, `n0 = n2 + 1`.
