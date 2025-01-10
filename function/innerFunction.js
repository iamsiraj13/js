function something(greet, name) {
  //   console.log(greet, name);
  function getFirstName() {
    // console.log(greet + " " + name);
    if (name) {
      return name.split(" ")[0];
    }
  }
  var mgs = greet + " " + getFirstName();
  console.log(mgs);
}

something("Good morning", "Sirajul islam");
