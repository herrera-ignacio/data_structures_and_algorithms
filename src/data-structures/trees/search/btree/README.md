# [B-tree](https://en.wikipedia.org/wiki/B-tree)

A B-Tree is a __self balancing__ tree data structure that maintains __sorted data__ and allows search, sequential access, insertions and deletions in logarithmic time.

B-Tree generalizes the binary search tree, allowing for nodes with more than two children.

Unlike other self-balancing search trees, the B-tree is well suited for storage systems that read/write relatively large blocks of data, such as discs. It is commonly used in databases and file systems.

### Properties

A B-tree of _order m_ is a tree which satisfies the following properties:

* Every node has at most __m__ children.
* Every non-leaf node (except root) has at least |m/2| child nodes.
* Root has at least two children if it is not a leaf node.
* A non-leaf node with K children contains k-1 keys.
* All leaves appear in the same level and carry no information.

### Variants

* [2-3](./2-3/README.md)
* [2-3-4](./2-3-4/README.md)
