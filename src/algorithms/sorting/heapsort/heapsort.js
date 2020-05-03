const test = require('../tester')

const Parent = i => Math.floor(i/2 - 1)
const Left = i => 2*i + 1
const Right = i => 2*i + 2

function Swap(A, i, j)
{
	const temp = A[i]
	A[i] = A[j]
	A[j] = temp
}

function MaxHeapify(A, i)
{
	l = Left(i)
	r = Right(i)

	let largest = i;
	if (l < A.heapSize && A[l] > A[largest])
	{
		largest = l
	}
	if (r <= A.heapSize && A[r] > A[largest])
	{
		largest = r
	}
	if (largest !== i)
	{
		Swap(A, i, largest)
		MaxHeapify(A, largest) // recursive call
	}
}

function BuildMaxHeap(A)
{
	A.heapSize = A.length - 1
	for (let i = Math.floor(A.length - 1 / 2); i >= 0; i--)
	{
		MaxHeapify(A, i)
	}
}

function HeapSort(A)
{
	BuildMaxHeap(A)
	for (let i = A.length - 1; i >= 1; i--)
	{
		Swap(A, 0, i)
		A.heapSize = A.heapSize - 1
		MaxHeapify(A, 0)
	}
	return A
}


test(HeapSort)

