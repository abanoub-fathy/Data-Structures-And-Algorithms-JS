const getMaxSubArr = (arr, n) => {
    if(n > arr.length) return null;

    var maxSum = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        var tempSum = 0;

        // loop n times
        for (let j = 0; j < n; j++) {
            tempSum += arr[i + j];
        }

        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

/*
 * Big O Notation is O(N^2)
 * Naive solution
 // ([1, 2, 3, 4, 5, 4, 2, 1], 3) --> 12
 // ([1, 2, 3, 5], 2) --> 8
*/

getMaxSubArr([5, 2, -1, 0, 4, 6, 1, 8, 1, 2], 3)    // 15
getMaxSubArr([1, 10, 8, 2, 4, 5, 7], 1) //10