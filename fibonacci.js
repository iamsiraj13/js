/**
 * fibonaccci series
 */

function fibonacci(n) {
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[n];
}

console.log(fibonacci(15));

function fibo(n) {
  if (n <= 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(15));
