console.log("hello world.");

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce(function (prevValue, currentValue) {
  return prevValue * currentValue;
}, numbers[0]);

console.log(sum);

// maximum value
const max = numbers.reduce(function (prevValue, currentValue) {
  return Math.max(prevValue, currentValue);
});

console.log(max);

// my custom reduce function

function myReduce(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

const siraj = myReduce(
  numbers,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  numbers[0]
);

console.log(siraj);
