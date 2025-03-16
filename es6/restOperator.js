// rest operator

function op(...rest) {
  console.log(a, b, ...rest);
  console.log(arguments);
}

op("Sirajul", 20, "student", "valobasa");
