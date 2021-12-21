const getMaxSubArr = (arr, n) => {
    if(n > arr.length) return null;
    let maxSum = -Infinity;
    let tempSum = 0;


    // get the sum of the first n elements
    for(let i = 0; i < n; i++) {
        tempSum += arr[i];
    }
    
    for (let i = 0; i < arr.length - n; i++) {
        tempSum = tempSum - arr[i] + arr[i + n];
        maxSum = Math.max(tempSum, maxSum)
    }

    return (maxSum === -Infinity) ? tempSum : maxSum;
}
       

/*
 * Big O Notation is O(N)
 * refactored solution
 * [1, 2, 6, 4, 2]
*/

console.log(getMaxSubArr([5, 2, -1, 0, 4, 6, 1, 8, 1, 2], 3))   //15
console.log(getMaxSubArr([1, 2, -1, 3], 4)) //5