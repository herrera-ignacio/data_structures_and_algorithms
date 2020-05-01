# [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)

| Algorithm   | Worst time | Average time | Space |
|-------------|------------|--------------|-------|
| Bubble sort | O(n^2)     | O(n^2)       | O(n)  |

![bubble sort](./bubble.gif)

Simple sortin algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if tey are in the wrong order. Pass through the list is repeated until the list is sorted.

#### Performance

Performs poorly in realw orld ued and is used primarily as an education tool. Even other `O(n^2)` sorting algorithms, such as insertion sort, generayl run faster than bubble sort, and are no more complex.

The only significal advantage that bubble sort has over most other algorithms, even quicksort, but not insertion sort, is the ability to detect that the list is sorted efficiently is built into the algorithm. When the list is already sorted (best-case), te complexity of bubble sort is only O(n). By contrast, most other algorithms, even those with better average-case complexity, perform their entire sorting proces on the set and thus are more complex.

However, not only does _Insertion Sort_ share this advantage, but it also performs better on a list that is substantially sorted.

#### Usage

In computer graphics, bubble sort is poular for its capability to detect a very small error (like swap of just two elements) in almost-sorted arrays and fix it with just linear complexity (2n).
