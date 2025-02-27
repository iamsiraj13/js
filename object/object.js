const person = {
  fname: "Sirajul",
  lname: "Islam",
  language: "en",

  get fullname() {
    return this.fname + " " + this.lname
  },
  set elangu(ln) {
    this.language = ln
  },
  set olan(fn) {
    this.language = fn
  }
}

console.log(person.language)

console.log(person.fullname)
