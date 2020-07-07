const Heap = require('../heap/Heap')

/**
 * Max Priority Queue based on Max Heap
 */
class PriorityQueue {
	constructor() {
		this.heap = new Heap()
	}

	insert(key) {
		this.heap.InsertKey(key)
	}

	maximum() {
		return this.heap.Max()
	}

	extractMax() {
		return this.heap.ExtractMax()
	}

	increaseKey(i, key) {
		return this.heap.IncreaseKey(i, key)
	}
}

const pq = new PriorityQueue()