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

//////////////////////// Applying Tabulation \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const fibWithTabulation = (n) => {
  if (n <= 2) return 1;

  // define a table
  const table = { 1: 1, 2: 1 };

  // loop up to n
  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
};

fibWithTabulation(10); // Big O ==> O(N) -- with better space complexity
