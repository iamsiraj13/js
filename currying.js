function add(a, b, c) {
  return a + b + c;
}

add(30, 32, 22);

// currying

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(currying(2)(3)(4));
