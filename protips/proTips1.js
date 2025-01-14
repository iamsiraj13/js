// 1. Swaping values

let arr = [1, 2, 3, 4, 5];

// temp variable
// let temp = array[0];
// array[0] = array[1];
// array[1] = array[2];
// array[2] = array[3];

console.log(arr);

// array destructuring way swaping
[arr[0], arr[4]] = [arr[4], arr[0]];
console.log(arr);
// math

let a = 1;
let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// math
b = a + (a = b) - b;
console.log(a, b);
