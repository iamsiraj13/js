// class bluepring
class Car{
    constructor(name, year){
        this.name = name,
        this.year = year
    }
    run(speed){
         return `${this.name} is running ${speed}`
    }
}

let bmw = new Car("bmw",2001)
console.log(bmw.run("100km per hour."))