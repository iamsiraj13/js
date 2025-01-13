// callback function
function sum(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function div(a, b) {
  return Math.ceil(a / b);
}

function sample(a, b, cb) {
  var result = cb(a, b);
  return result;
}

console.log(sample(4, 6, sum));
console.log(sample(4, 6, subtraction));
console.log(sample(4, 6, multiply));
console.log(sample(4, 6, div));
