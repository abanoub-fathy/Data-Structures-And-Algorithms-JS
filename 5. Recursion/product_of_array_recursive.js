const productOf = (arr) => {
    // base case
    if(arr.length === 0) {
        return 1;
    }

    // recursive case
    return arr[0] * productOf(arr.slice(1));
}

productOf([1, 2, 5, 4])