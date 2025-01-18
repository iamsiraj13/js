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

// example

function discount(disc) {
  return (price) => {
    return price - price * disc;
  };
}

let tenPercentDiscount = discount(0.1); // pertial function

console.log(tenPercentDiscount(600));
