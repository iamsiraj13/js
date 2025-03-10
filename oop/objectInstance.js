// By creating instance of object


let person = new Object({
    name: "sirajul ",
    age: 35,
    pro: "Student",
    getName: () => {
        return person.last
    }
})
person.last = "kumir"

console.log(person.getName())