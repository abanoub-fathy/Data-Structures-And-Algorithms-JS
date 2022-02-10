const fib = (n) => {
  // base case
  if (n <= 2) return 1;

  // recursive case
  return fib(n - 1) + fib(n - 2);
};

fib(10); // big O ==> 2^N

//////////////////////// Applying MemoIzation \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const fibWithMemo = (n, memo = { 1: 1, 2: 1 }) => {
  // base case
  if (memo[n]) return memo[n];

  // recursive case
  let result = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
  memo[n] = result;
  return result;
};

fibWithMemo(10); // Big O ==> O(N)
