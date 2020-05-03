# Sorting

| Algorithm      | Worst time | Average time | Space |
|----------------|------------|--------------|-------|
| Bubble sort    | O(n^2)     | O(n^2)       | O(n)  |
| Insertion sort | O(n^2)     | O(n^2)       | O(1)  |
| Selection sort | O(n^2)     | O(n^2)       | O(1)  |
| Quick sort	 | O(n^2)     | O(n lg n)    | O(n) naive or O(log n) | 
| Merge sort	 | O(n lg n)  | O(n lg n)    | O(n)  | 
| Heap sort      | O(n lg n)  | O(n lg n)    | O(n)  |
| Counting sort	 | O(n + k)   | O(n + k)     | O(n + k) | 
| Radix sort	 | O(w * n)   | O(w * n)     | O(w * n) | 
| Bucket sort    | O(n^2)     | O(n+n^2/k+k) | O(n * k) |

### Stable

A sorting algorithm is said to be __stable__ if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted

* Insertion sort
* Merge sort
* Bubble sort
* Counting sort
* Tim sort

### Unstable

* Heap sort
* Quick sort
* Shell sort
* Selection sort

## Sorting in Linear Time

The sorted order of algorithms such as quicksort and mergesor is based only on cparisons between the input elements. We call such sroting algorithms __comparison sorts__. It is proven that with comparison sorts the best we can achieve in time complexity is `O(n lg n)` time.

We have other sorting algorithms that use operations other than comparisons to determined the sorted order.

* Counting Sort
* Bucket Sort
* Radix Sort
* Shell Sort
