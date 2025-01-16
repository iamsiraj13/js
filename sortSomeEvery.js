var persons = [
  {
    name: "A",
    age: 24,
  },
  {
    name: "C",
    age: 34,
  },
  {
    name: "B",
    age: 26,
  },

  {
    name: "D",
    age: 30,
  },
  {
    name: "E",
    age: 40,
  },
];
persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});

console.log(persons);

/**
 * every method
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
var arr2 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

var result = arr2.every(function (value, index, arr) {
  if (arr2[0] === value) {
    return true;
  } else {
    return false;
  }
});
console.log(result);

// some method

var res = arr.some(function (value) {
  console.log(value);
});
