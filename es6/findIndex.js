var number = [1, 2, 3, 4, 54, 56, , 7, 8];

let res = number.findIndex((cv, index, arr) => {
  return cv > 55;
});

console.log(res);

let result = number.filter((cv, index, arr) => {
  return cv > 5 && cv < 8;
});

console.log(result);
