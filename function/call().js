let window = {
    get sleep(){
        console.log("i am sleeping")
    }

}

window.sleep

const person = {
    fullName:function(...yo){
        return this.fname+" " +this.lname+" "+ yo
    }
}
const person1 = {
    fname:"Sirajul",
    lname:"islam"
}

let arr = [12,4312,24,55]

console.log(Math.max.apply(null,arr))

let name = person.fullName.apply(person1, arr)
console.log(name)

