class Car{
    constructor(brand){
        this.carname = brand
    }
    present(){
        return "I have a "+ this.carname
    }
    // getter
    get cnam(){
        return this.carname
    }
    // setter
    set cnam(x){
        this.carname = x
    }
}

class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod
    }
    show(){
        return this.present() + ', it is a' + this.model;
    }
}
let myCar = new Model("ford","Mustang")
myCar.cnam = "Sirajul"
console.log(myCar.cnam ) 
console.log(myCar.show())