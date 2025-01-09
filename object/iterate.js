var obj = {
  x: 40,
  y: 50,
  z: 78,
};
for (let i of obj) {
  console.log(i); // Output: 10, 20, 30
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (elm in obj) {
  console.log(elm + " : " + obj[elm]);
}

var arr = [1, 2, 3, 4, 5];

for (let i in arr) {
  console.log(i);
}

const numbers = [10, 20, 30];

for (let i of obj) {
  console.log(i); // Output: 10, 20, 30
}
