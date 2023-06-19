var car1 = {
    //1.  p:v(many)
    brand:"TaTa",
    year:2023,
    model:"harrier",
    color:'black',
    type:'suv',
    engine:"petrol",
    price:200000,
    //2.  method/funtions(many)
    getFullDetail(){
        //every function return something
        return this.brand+' '+this.year+" "+this.model+' '+this.color+` `+this.price    
    }
}
let car2 = {
    //1.  p:v(manny)
    brand:"mahindra",
    year:'2022',
    model:"thar",
    color:`white`,
    type: 'gypsy',
    engine:"diesel",
    price: 2500000,
    //2. function/method(many)

}
const car3 = {
    //1. p:v(many)
    brand:"hundai",
    year:'2021',
    model:"verna",
    color:`black`,
    type:"sedan",
    engine:'petrol',
    price:1500000,
    //2. function/method(many)
}  

console.log(car1.brand); //object.property
console.log(car2['brand']); //object["property"]
let x= "brand" //x is an expression
console.log(car3[x]); //object[expression]


