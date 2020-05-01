# Binary Search Tree

BST some times called __sorted binary trees__, allow __fast lookup, addition and removal__ of items, and can be used to impleent either dynamic sets of items, or lookup tables that allow finding an item by its key.

ST keep their keys in sorted order, so that lookup and other operations can use the principles of binary serach.

> When looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in the left or right subtrees.

On average, this means that each comparison allows he operations to skip about half o the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items sorted in the tree.

This is much better than the linear time required ot ind item by key in an (unsorted) array, but slower than the corresponding operations on hash tables.

![bst](./bst.png)

#### Binary Search property

Key in each node must be greater than or equal than any key stored in the left-subtree, and less than or equal to any key stored in the right subtree.

