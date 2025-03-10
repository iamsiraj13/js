function myfunc(arg){
    this.fname = arg
}

const obj = new myfunc("sirajul")
console.log(obj.fname)