const personMethods = {
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("i am sleeping");
  },
  play() {
    console.log("person is playing");
  },
};

Person.prototype = {
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("i am sleeping");
  },
  play() {
    console.log("person is playing");
  },
};
PersonwithNew.prototype = {
  eat() {
    console.log("person is eating");
  },
  sleep() {
    console.log("i am sleeping");
  },
  play() {
    console.log("person is playing");
  },
};

function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}
function PersonwithNew(name, age) {
  //   let person = Object.create(PersonwithNew.prototype);
  this.name = name;
  this.age = age;
  //   return person;
}

const sakib = Person("Sakib", 20);
console.dir(sakib);

const tamim = new PersonwithNew("tamim", 40);
tamim.play();
//  প্রটোটাইপ হলো জাভাস্ক্রিপ্ট এর একটা প্রপার্টি যেটা
// একটা অব্জেক্ট কে পয়েন্ট করে।
