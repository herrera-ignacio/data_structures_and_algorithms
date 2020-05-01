function getRandomInt(min, max)
{
	return Math.floor(min + Math.random() * max);
}

function createTestArray(length, min = 0, max = 100)
{
	const res = [];
	for (let i = 0; i < length; i++)
	{
		res.push(getRandomInt(min, max));
	}
	return res;
}

function createTestCases(amount)
{
	const testCases = [];
	for (let i = 0; i < amount; i++)
	{
		const randomLength = getRandomInt(1, 100);
		testCases.push(createTestArray(randomLength));
	}
	return testCases;
}

function isSorted(arr)
{
	let sorted = true;
	for (let i = 0; i < arr.length - 1 && sorted; i++)
	{
		if (arr[i] > arr[i+1])
		{
			sorted = false;
		}
	}
	return sorted;
}

/**
 * @param {function} sortMethod - should take array as param
 * @return {bool} - assert if array is sorted ASC
 */
function testSortingMethod(sortMethod)
{
	const testCases = createTestCases(100);
	return testCases.reduce((success, arr, index) => {
		console.log(`### Test case ${index+1} ###`)
		if (!isSorted(sortMethod(arr)))
		{
			console.log('FAILED');
			return false;
		}
		console.log('PASSED');
		return success;
	}, true);
}

function test(sortMethod)
{
	if(testSortingMethod(sortMethod))
	{
		console.log('--- SUCCESS, VALID ALGORITHM! ---');
	}
	else
	{
		console.log('--- FAILURE, INVALID ALGORITHM! ---');
	}
}


module.exports = test;
