// function  default parameter value

function myfunc(x) {
  return x;
}

console.log(myfunc());

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.concat([]));

var obj1 = {
  name: "sirajul",
  lname: "islam",
};
var obj2 = {
  age: 23,
  dob: "11-07-2000",
};

var person = { ...obj1, ...obj2 };
console.log(person);

// rest parameter

function hello(a, b, ...rest) {
  for (elm in arguments) {
    console.log(Number(elm));
  }
}

hello(2, 3, 3, 2, 3, 5, 65, 8);
