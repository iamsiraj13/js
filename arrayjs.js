var arr = [4, 5, 6, 7, 8, 9];

// odd numbe from array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}
// even numbe from array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
// sum of off array element
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(result);
// adding 2 with every item in array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + 2);
}

// array reverce
for (let i = arr.length - 1; i > 0; i--) {
  console.log(arr[i]);
}

var newArr = [1, 2, 3, 4, 5, 6, 7, 8];

// insert 9 to index 3
