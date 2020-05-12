function maxCrossingArray(A, low, mid, high)
{
    // This could be done reusing only half of those variables
    // But this way is I think is more explicit about what's happening
    let leftSum = Number.NEGATIVE_INFINITY
    let i = mid
    let maxLow = low
    let rightSum = Number.NEGATIVE_INFINITY
    let j = mid + 1
    let maxHigh = high

    let sum = 0
    while (i > low)
    {
        sum += A[i]
        if (sum > leftSum)
        {
            leftSum = sum
            maxLow = i
        }
        i--
    }
    
    sum = 0
    while (j < high)
    {
        sum += A[j]
        if (sum > rightSum)
        {
            rightSum = sum
            maxHigh = j
        }
        j++
    }
    
    return [maxLow, maxHigh, leftSum + rightSum]
}

function maxSubarray(A, low, high)
{
    if (high == low)
    {
        // base case, only 1 element
        return [low, high, A[low]]
    }
    else
    {
        const mid = Math.floor((low+high) / 2)
        const [leftLow, leftHigh, leftSum] = maxSubarray(A, low, mid)
        const [rightLow, rightHigh, rightSum] = maxSubarray(A, mid+1, high)
        const [crossLow, crossHigh, crossSum] = maxCrossingArray(A, low, mid, high)

        if (leftSum > rightSum && leftSum > crossSum)
        {
            return [leftLow, leftHigh, leftSum]
        }
        if (rightSum > crossSum)
        {
            return [rightLow, rightHigh, rightSum]
        }
        else
        {
            return [crossLow, crossHigh, crossSum]
        }
    }
}

const test = [-3, 1, -8, 4, -1, 2, 1, -5, 5]
const sol = [3, 6, 6]
// Solution = [maxLow, maxHigh, maxSum]

const res = maxSubarray(test, 0, test.length)

const correctRes = (res) => res.length === sol.length
    && res.reduce((valid, val, idx) => valid && val === sol[idx], true)

console.log(res)
console.log(`Is solution correct? ${correctRes(res)}`)