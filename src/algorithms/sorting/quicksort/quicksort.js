const test = require('../tester')

function swap(A, i, j)
{
	const temp = A[i]
	A[i] = A[j]
	A[j] = temp
}

function Partition(A, p, r)
{
	const pivot = A[r]
	let i = p - 1
	for (let j = p; j < r; j++)
	{
		// Re-arrange elements to create partitons
		if (A[j] <= pivot) swap(A, ++i, j)
	}
	// Place pivot in its proper position
	swap(A, ++i, r)
	// Return pivot position
	return i;
}

function Quicksort(A, p, r)
{
	if (p < r)
	{
		q = Partition(A, p, r)
		Quicksort(A, p, q-1)
		Quicksort(A, q+1, r)
	}
	return A
}

test((arr) => Quicksort(arr, 0, arr.length))

