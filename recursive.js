function factorial(n) {
  if (n === 0 || n === 1) {
    // Base case
    return 1;
  }
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120

function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}

console.log(sum(7000));
