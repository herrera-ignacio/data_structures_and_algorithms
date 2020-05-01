# [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)

| Algorithm      | Worst time | Average time | Space |
|--------------- |------------|--------------|-------|
| Insertion sort | O(n^2)	  | O(n^2)		 | O(1)  |

![insertion sort](./insertion.gif)

Insertion sort is much less efficient on large list than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it provides several advantages:

* Simple implementation.
* Efficient for small data sets (more than most other simple quadratic algorithms).
* Adaptive (efficient for data sets that are already substantialy sorted).
* Stable.
* __In-place__.
* Online (can sort a list as it receives it).

### Algorithm

At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remains.
