const test = require('../tester');

function swap(arr, i, j)
{
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function insertionSort(arr)
{
	let i = 1;
	let j;
	while (i < arr.length)
	{
		j = i;
		while (j > 0 && arr[j] < arr[j-1])
		{
			swap(arr, j, j-1);
			j--;
		}
		i++;
	}
	return arr;
}

test(insertionSort);
