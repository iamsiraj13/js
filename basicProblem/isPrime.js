function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));

console.log(Math.sqrt(49));

let arr = [10, 11, 13, 15, 17, 19, 20];

function findAllprime(arr) {
  let ned = [];
  for (item of arr) {
    if (isPrime(item)) {
      ned.push(item);
    }
  }
  return ned;
}
console.log(findAllprime(arr));
