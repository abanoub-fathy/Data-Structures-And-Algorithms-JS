const fib = (n) => {
    // base case
    if (n <= 2) return 1;

    // recursive case
    return fib(n - 1) + fib(n - 2);
}

fib(10)