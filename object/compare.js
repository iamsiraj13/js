// compare between two object

var obj = {
  a: 10,
  b: 20,
};
var obj2 = {
  a: 10,
  b: 20,
};

console.log(obj === obj2);

if (obj.a === obj2.a && obj.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
}

console.log(obj);
console.log(JSON.stringify(obj));
obj = JSON.stringify(obj);
console.log(JSON.parse(obj));
