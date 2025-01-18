// funciton compostion
function print(inp) {
  console.log(inp);
}

function multiplyByFive(n) {
  return n * 5;
}

function add(a, b) {
  return a + b;
}

const compose = print(multiplyByFive(add(10, 10)));

console.log(compose);
