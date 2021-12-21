const getSum = (start, end) => {
    // base case
    if(start === end) {
        return start;
    }

    // recursive case
    return end + getSum(start, end - 1)
}

getSum(1, 5)