# [Heap](https://en.wikipedia.org/wiki/Heap_(data_structure))

A Heap is a specialized tree-base data structure which is essentially an almost complete tree that satisfies the __heap property__.

![heap](./heap.png)

However, a heap is not a sorted structure. It can be regarded as being partially ordered. A heap is useful when it is necessary to repeatedly remove the object with the highest/lowest priority (great for priority queues).

Heaps are also crucial in several efficient graph algorithms such as Dijkstra's algorithm. When a heap is a complete binary tree, it has a smallest possible height (log n).

#### Heap Property

In a max heap, for any given node C, if P es parent node of C, then the key (value) of P is greater than or equal to the key of C. In a min heap, the inversal statement holds true.

### Heapify

> Create a heap out of given array of elements.

### Implementation

Heaps are usually implemented with an implicit heap data structure, consisting of an array (fixed or dynamic) where each element represents a tree node whose parent/children relationship is defined implicitly by their index.

After an element is inserted into or deleted from a heap, the heap property may be violated and the heap must be balanced by swappign elements within the array.

#### Implicit Heap Structure

Fist (or last) element will contain the root. Next two element contain its children. Next four element contain the four children of the two child nodes, etc...

Thus the childre of the node at position n, would be positions 2n and 2n+1, or in a zero-based array 2n+1 and 2n+2.

Computing the index of the parent node of n-th element is also straightforward (n/2).

![heap array](./heap-array.png)
