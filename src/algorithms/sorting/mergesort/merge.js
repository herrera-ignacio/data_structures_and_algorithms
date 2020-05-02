const test = require('../tester');

function Merge(left, right)
{
	const result = [];

	while (left.length > 0 && right.length > 0)
	{
		if (left[0] <= right[0])
		{
			result.push(left[0])
			left.shift()
		}
		else
		{
			result.push(right[0])
			right.shift()
		}
	}

	// Now one of the halfs still contains elements
	result.concat(left)
	result.concat(right)

	return result;
}

function MergeSort(arr)
{
	// Base case
	if (arr.length <= 1) return arr

	// Recursively sort both sublists
	const left = MergeSort(arr.slice(0, arr.length / 2))
	const right = MergeSort(arr.slice(arr.length / 2 + 1, arr.length))

	return Merge(left, right)
}

test(MergeSort)

