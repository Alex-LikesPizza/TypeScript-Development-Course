class Product {
  // name: string;
  private readonly id: number; // creates a private variable only modifiable in the constructor 

  constructor(public name: string){ // creates a public name variable
    this.id = Math.floor(Math.random() * 100000);
  }
  log(this: Product){
    console.log(this);
  }
  describe(this: Product){
    console.log(this.name);
  }
  getId(this: Product){
    return this.id;
  }
}
const product = new Product("any product")

// const productCopy = { describe: product.describe} // Error: no name, log property in "this" context, aka not of type Product
// productCopy.describe();
// console.log(product.id); // id is not accessible
console.log(product.name, "id: ", product.getId());

class Food extends Product {
  constructor(private type: string){
    super("Food"); 
  }
  get foodType(){
    return this.type;
  }
  set foodType(type: string){
    this.type = type;
  }
}

let banana = new Food("fruit");
console.log(banana.foodType);
banana.foodType = "berry";
console.log(banana.foodType);

abstract class Shape {
  constructor(public lined: boolean){}
  abstract print(): void;
}

class Square extends Shape{
  constructor(public name: string){
    super(true);
  }
  print(){ // must be implemented
    console.log(this.name, "is", this.lined? "a lined" : "not a lined", "square")
  }
}
let sqr = new Square("contour");
sqr.print();