// যখন একটা ফাংশন অন্য ফাংশন কে argument  হিসেবে গ্রহন করে বা ফাংশন রিটার্ন করে/
// তখন তাকে Highter order function  বলে।

function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var c = a + b; //7
  var d = a - b; // -1

  function multiply() {
    var m = func(a, b); // 7
    console.log(m);

    return c * d * m;
  }

  return multiply;
}

var multiply = manipulate(3, 4, add);
console.log(multiply());
