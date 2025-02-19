const person = {
  firstname: "Sirajul",
  lastname: "Islam",
  age: 25,
  roll: 202232016467,
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
  getObj: function () {
    return this;
  },
};

console.log(person);
console.log(person.getObj());
