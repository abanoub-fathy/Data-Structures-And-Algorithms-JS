// get the digits in the number by index
const getDigit = (num, index) => {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

// get the number of digits in a number
const getNumberOfDigits = (num) => {
    if(num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1; 
}

// get the max Number of digits in arr
const getMaxNumOfDigits = (arr) => {
    let max = 0;

    for(let item of arr) {
        max = Math.max(max, getNumberOfDigits(item))
    }

    return max;
}

// sorting the numbers
const radixSort = (arr) => {
    let maxIteration = getMaxNumOfDigits(arr),
        buckets;

    for (let i = 0; i < maxIteration; i++) {
        // set bucket to arr of 10 empty sub arrs
        buckets = Array.from({length: 10},  () => []);

        for(let item of arr) {
            // put the number in the right bucket position
            buckets[getDigit(item, i)].push(item);
        }
        
        // re-collect from the buckets
        arr = [].concat(...buckets);
    }

    return arr;
}


radixSort([9, 212, 55, 19, 111, 3])