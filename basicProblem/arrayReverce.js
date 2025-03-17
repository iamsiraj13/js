/**
 * এটি একটি সাধারণ প্রবলেম। তুমি অ্যারে রিভার্স করবে। অর্থাৎ, প্রথম উপাদানটি শেষ হয়ে যাবে এবং শেষ উপাদানটি প্রথমে চলে আসবে।
 */

let arr = [10, 21, 30, 33, 40, 55];

function arrayRev(arr) {
  let my = [];
  while (0 < arr.length) {
    my.push(arr.pop());
  }
  return my;
}
console.log(arrayRev(arr));

function findExistValue(arr, target) {
  if (arr.indexOf(target) !== -1) {
    return true;
  }
  return false;
}

console.log(findExistValue(arr, 10));

let arr2 = [-10, 20, -30, 40, 50, -60];
function isPositive(arr) {
  let newarr = [];
  for (item of arr) {
    if (item > 0) newarr.push(item);
  }
  return newarr;
}
console.log(isPositive(arr2));

// sum of all prime number
