"use strict";
class Product {
    constructor(name) {
        this.name = name;
        this.id = Math.floor(Math.random() * 100000);
    }
    log() {
        console.log(this);
    }
    describe() {
        console.log(this.name);
    }
    getId() {
        return this.id;
    }
}
const product = new Product("any product");
// const productCopy = { describe: product.describe} // Error: no name, log property in "this" context, aka not of type Product
// productCopy.describe();
// console.log(product.id); // id is not accessible
console.log(product.name, "id: ", product.getId());
class Food extends Product {
    constructor(type) {
        super("Food");
        this.type = type;
    }
    get foodType() {
        return this.type;
    }
    set foodType(type) {
        this.type = type;
    }
}
let banana = new Food("fruit");
console.log(banana.foodType);
banana.foodType = "berry";
console.log(banana.foodType);
class Shape {
    constructor(lined) {
        this.lined = lined;
    }
}
class Square extends Shape {
    constructor(name) {
        super(true);
        this.name = name;
    }
    print() {
        console.log(this.name, "is", this.lined ? "a lined" : "not a lined", "square");
    }
}
let sqr = new Square("contour");
sqr.print();
