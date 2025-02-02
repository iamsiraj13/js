let n = 18;
function isHappy(n) {
  let seen = new Map();

  while (n !== 1 && !seen.has(n)) {
    seen.set(n, true); // Store the number in the hash table
    n = sumOfSquares(n);
  }

  return n === 1;
}

function sumOfSquares(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Example test cases
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
