const fib = (x) => {
    // base case
    if(x === 0 || x === 1) {
        return x;
    }

    // recursive case
    return fib(x - 1) + fib(x - 2);
}

fib(6)