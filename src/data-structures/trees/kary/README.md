# [K-Ary Trees](https://en.wikipedia.org/wiki/M-ary_tree)

In _graph teory_, k-ary tree is a rooted tree in which each node has __no more than k children__.

![kary tree](./kary.png)

> Binary Tree is a special case where `k=2`.

## Types of K-Ary Trees

* __Full/Strict__ k-ary tree, within each level every node has either 0 or k children.
* __Complete__ k-ary tree, is maximally space efficient. It must be completely filled on every level except possibly for the last one, in which case all nodes of the tree must be as far left as possible.
* __Perfect__ k-ary tree is a full k-ary tree in which all leaf nodes are at the same depth. 

## Properties of K-Ary Tres

* Total number of possible k-ary trees with `n` nodes can be calculated with [Catalan Number](https://en.wikipedia.org/wiki/Catalan_number).
* Height of a complete k-ary tree with n nodes is `|log_m ((m-1) * n)|`.
