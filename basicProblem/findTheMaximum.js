let arr = [10, 20, 4, 45, 99];
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));

function findMIn(arr) {
  let min = Infinity;
  for (let item of arr) {
    if (item < min) min = item;
  }
  return min;
}

console.log(findMIn(arr));
