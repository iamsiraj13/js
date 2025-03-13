const user = {
  id: 23,
  name: "Sakib",
  age: 45,
};

let { education = {} } = user;

console.log(education);

// array destruring

// var nums = [1, 2, [3, 4], 5, 6];
// var [, , [a, b]] = nums;
// console.log(a, b);

// swap using destructring

let a = 1;
let b = 2;

[b, a] = [a, b];
console.log(a, b);
