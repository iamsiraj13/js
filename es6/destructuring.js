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

export let a = 1;
export let b = 2;

[b, a] = [a, b];
console.log(a, b);

export function hello() {
  return "hello from destructuring";
}
