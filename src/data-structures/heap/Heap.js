/**
 * Max Heap implementation
 */
class Heap {
	constructor(arr = []) {
		this._array = arr
		this.heapSize = arr.length - 1
		for (let i = Math.floor(this.heapSize / 2); i >= 0; i--) {
			this.MaxHeapify(i)
		}
	}

	Parent = (i) => Math.floor(i / 2)
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

	IncreaseKey(i, key) {
		if (i > this.heapSize) throw new Error('Invalid index')
		if (key < this._array[i]) throw new Error("New key can't be smaller than current one")
		this._array[i] = key
		while (i > 0 && this._array[this.Parent(i)] < this._array[i]) {
			this.Swap(i, this.Parent(i))
			i = this.Parent(i)
		}
	}

	InsertKey(key) {
		this.heapSize += 1
		this._array.push(Number.NEGATIVE_INFINITY)
		this.IncreaseKey(this.heapSize, key)
	}

	Max() {
		return this._array[0]
	}

	ExtractMax() {
		if (this.heapSize < 0) throw new Error("Heap underflow")
		const max = this._array[0]
		this._array[0] = this._array[this.heapSize]
		this.heapSize -= 1
		this._array.pop()
		this.MaxHeapify(0)
		return max
	}
}

module.exports = Heap
