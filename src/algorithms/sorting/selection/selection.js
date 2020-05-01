const test = require('../tester');

function swap(arr, i, j)
{
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function SelectionSort(arr)
{
	let minIdx;
	for (let i = 0; i < arr.length; i++)
	{
		minIdx = i;
		for (let j = i; j < arr.length; j++)
		{
			if (arr[j] < arr[minIdx])
			{
				minIdx = j;
			}
		}
		swap(arr, i, minIdx);
	}
	console.log(arr);
	return arr;
}

test(SelectionSort);

