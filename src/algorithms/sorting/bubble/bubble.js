const test = require('../tester.js');

function swap(arr, i, j)
{
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function bubbleSort(arr)
{
	let sorted = false;

	while(!sorted)
	{
		sorted = true;
		for (i = 0; i < arr.length - 1; i++)
		{
			if (arr[i] > arr[i+1])
			{
				swap(arr, i, i+1);
				sorted = false;
			}
		}
	}

	return arr;
}

test(bubbleSort);
