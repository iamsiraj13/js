var arr = [1, 2, 3, 4, 5];

var sqrarr = arr.map(function (value, index, arr) {
  return Math.floor(Math.random() * 100);
});
console.log(sqrarr);
console.log(arr);

// custom map function
function map(arr, cb) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = cb(arr[i], i, arr);
    newarr.push(temp);
  }
  return newarr;
}

map(arr, function (value, index, arr) {
  console.log(value);
});
