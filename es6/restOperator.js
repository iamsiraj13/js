import { a, b, hello } from "./destructuring.js";
// rest operator
function op(...rest) {
  console.log(a, b, ...rest);
  console.log(arguments);
}

console.log(hello());
console.log(a, b);

console.log("Hello");
