const test = require('../tester')
const Heap = require('../../../data-structures/heap/Heap')

function HeapSort(A) {
	const heap = new Heap(A)
	for (let i = A.length - 1; i >= 1; i--) {
		heap.Swap(0, i)
		heap.heapSize -= 1
		heap.MaxHeapify(0)
	}
	return A
}

test(HeapSort, true)

