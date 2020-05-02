function initializeCountArray(k)
{
	const res = []
	for (let i = 0; i < k; i++)
	{
		res.push(0)
	}
	return res;
}

function CountingSort(arr, k)
{
	const count = initializeCountArray(k)
	const res = new Array(arr.length)

	for (const num of arr)
	{
		count[num]++
	}

	let posOffset = 0;
	for (let i = 0; i < k; i++)
	{
		total = count[i] + posOffset
		count[i] = posOffset
	}

	for (const x of arr)
	{
		res[count[x] - 1] = x
		count[x]--
	}

	return res;
}

const test = [4,4,3,15,6,8,0,1,1,9];

console.log(CountingSort(test, 20));
