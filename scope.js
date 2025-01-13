"Strict Mode";

// scope

if (true) {
  var x = "from if block";
}

function a() {
  var x = "from a function";
  console.log(x);
}
function b() {
  x = "from b function";
  console.log(x);
}
a();
b();
console.log(x);
