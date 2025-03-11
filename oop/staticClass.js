class Car{
    constructor(brand){
        this.carname = brand
    }
    present(){
        return "I have a "+ this.carname
    }
   
}

class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod
    }
    static show(x){
        return this.present() + ', it is a' + x.model;
    }
}
let myCar = new Model("ford","Mustang")  
console.log(Model.show(myCar))