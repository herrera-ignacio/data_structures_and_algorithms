test = require('../tester')

function Swap(A, i, j)
{
	const temp = A[i]
	A[i] = A[j]
	A[j] = temp
}

function Merge(A, low, mid, high)
{
	let i = low // left half current position
	let j = mid + 1 // right half current position
	let k = low // aux array current position	
	const Aux = [];

	// Iterate through both halves
	while (i <= mid && j <= high)
	{
		if (A[i] < A[j])
		{
			Aux[k++] = A[i++]
		}
		else
		{
			Aux[k++] = A[j++]
		}
	}

	// One of the halves still has elements
	for (; i <= mid; i++)
		Aux[k++] = A[i]
	for (; j <= high; j++)
		Aux[k++] = A[j]

	// Translate changes into original array
	for (i = low; i <= high; i++)
		A[i] = Aux[i]
}

function IMergeSort(A, n)
{
	let p, i, low, high, mid

	// We go through increasing slices of the array, multiple of two
	for (p = 2; p <= n; p *= 2)
	{
		// We sort each subarray
		for (i = 0; i + p - 1 <= n; i = i + p)
		{
			low = i
			high = i + p - 1
			mid = (low + high) / 2
			Merge(A, low, mid, high)
		}
	}
	
	// If we have a subarray bigger than the half, then we are done
	if (p/2 < n)
	{
		Merge(A, 0, p/2 - 1, n);
	}

	return A;
}

test((arr) => IMergeSort(arr, arr.length))

