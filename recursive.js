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

function sayHi(n) {
  if (n === 0) return;
  console.log("Hi calling");
  sayHi(n - 1);
}
console.log(sayHi(10));

function add(n) {
  if (n === 0) return 0;
  return n + add(n - 1);
}
console.log(add(5));

function sumRange(num) {
  if (num === 0) return 0;

  return num + sumRange(num - 1);
}

console.log(sumRange(10));
