function hello() {
  return "Line 2 code";
}

console.log("Line 1 code");
console.log("Line 3 code");

setTimeout(function () {
  console.log(hello());
}, 1000);

const paymentSuccess = true;

function enroll() {
  console.log("Course enrollment is in progress");

  setTimeout(function () {
    if (paymentSuccess) {
    }
  }, 2000);
}

enroll();
