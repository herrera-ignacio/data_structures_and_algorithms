class Heap {
	constructor(arr = []) {
		this._array = arr
		this.heapSize = arr.length - 1
		for (let i = Math.floor(this.heapSize / 2); i >= 0; i--) {
			this.MaxHeapify(i)
		}
	}

	Left = (i) => 2 * i + 1
	Right = (i) => 2 * i + 2

	Swap(i, j) {
		const temp = this._array[i]
		this._array[i] = this._array[j]
		this._array[j] = temp
	}

	MaxHeapify(i) {
		const left = this.Left(i)
		const right = this.Right(i)

		let largest = i
		if (left <= this.heapSize && this._array[left] > this._array[largest]) {
			largest = left
		}
		if (right <= this.heapSize && this._array[right] > this._array[largest]) {
			largest = right
		}
		if (largest !== i) {
			this.Swap(i, largest)
			this.MaxHeapify(largest)
		}
	}
}

module.exports = Heap
