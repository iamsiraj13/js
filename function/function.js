//  what is function
// input output processing

var arr1 = [1, 2, 3];
var arr2 = [45, 55, 12];
var arr3 = [54, 39, 40];
console.log(toString.call(arr1));

function sum(arr) {
  if (toString.call(arr) !== "[object Array]") {
    return;
  }
  let result = 0;
  for (elm of arr) {
    result += elm;
  }
  console.log(result);
}

sum(arr1);

function addall() {
  console.log(arguments);
  var arr = Object.values(arguments);
  var result = 0;
  for (elm of arr) {
    console.log(elm)
  }
  // console.log(result);
}

addall(10, 2, 3, 4, 5, 6, 7);

function a(b, c) {
  console.log(6 * c)
}
a(2)

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  console.log(max)
}


findMax(100, 20, 42, 41, 545)


function siraj(x) {
  return x.one = 0
  // console.log(x)
}

let m = {
  one: 200
}
siraj(m)
console.log(m)