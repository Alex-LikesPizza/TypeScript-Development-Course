//#region ----------- Decorator of class ---------------
function Logger(constructor: Function){
  console.log("Logging...");
  console.log(constructor);
}

@Logger 
class Person{
  name = "Alex";

  constructor(){
    console.log("Creating Person");
  }
}
//#endregion

//#region ----------- Decorator Factory ---------------

function LoggerFactory(logText: string){
  return function(constructor: Function){
    console.log(logText);
    console.log(constructor);
  }
}
@LoggerFactory("Logging Mark: ")
class Person2{
  name = "Mark";

  constructor(){
    console.log("Creating Person2");
  }
}

//#endregion

//#region ------------- Hooking DOM content with Decorators ---------------

function AddToDom(message: string, hookId: string){
  return function<T extends {new (...args: any[]) : {name: string}}>(ogConstructor: T){ // everything before next return, only executes on class initialization
    // const hookElement = document.getElementById(hookId);
    // const person = new ogConstructor();
    // if(hookElement){
    //   hookElement.querySelector("h1")!.textContent = person.name;
    //   hookElement.querySelector("p")!.textContent = message;
    // }
    return class extends ogConstructor { // returning a new constructor to replace the old, everything is executed for every new instance of class
      constructor(...args: any[]){
        super();
        const hookElement = document.getElementById(hookId);
        if(hookElement){
          hookElement.querySelector("h1")!.textContent = this.name;
          hookElement.querySelector("p")!.textContent = message;
        }
      }
    }
  }
}

@LoggerFactory("Creating New Student Class")
@AddToDom("Hello!", "app")
class Student {
  name = "Alex";

  constructor(){
    console.log("constructor called for Student Class");
  }
}
let student = new Student();
//#endregion

//#region ---------- Decorators of other stuff ------------------
function LogProperty(target: any, propertyName: string | Symbol){
  console.log("Property Decorator: ");
  console.log(target, propertyName);
}
function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor){
  console.log("Accessor Decorator: ");
  console.log("Target: ", target, "\nName: ", name, "\nDescriptor", descriptor);
}
function LogMethod(target: any, name: string, descriptor: PropertyDescriptor){ // can return a new PropertyDescriptor which will replace the old one
  console.log("Method Decorator: ");
  console.log("Target: ", target, "\nName: ", name, "\nDescriptor", descriptor);
}
function LogParameter(target: any, name: string, position: number){ // can return a new PropertyDescriptor which will replace the old one
  console.log("Parameter Decorator: ");
  console.log("Target: ", target, "\nName: ", name, "\nPosition: ", position);
}

class Product {
  @LogProperty
  title: string;
  @LogProperty
  private _price: number;
  constructor(title: string, price: number){
    this.title = title;
    this._price = price
  }
  
  @LogAccessor
  set price(@LogParameter val: number){
    if(val > 0){
      this._price = val;
    }
    else throw Error("Price must be greater than 0");
  }
  @LogMethod
  getPrice(){
    return this._price;
  }
};
//#endregion

//#region ---------- Validation with Decorators (Example Exercise) -----------

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
}
const registeredValidators: ValidatorConfig = {}; 
function IsRequired(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
  };
}

function IsPositiveNumber(target: any, propName: string){
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
  };
}

function validate(obj: any){
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if(!objValidatorConfig){
    return true;
  }
  let isValid = true;
  for(const prop in objValidatorConfig){
    for(const validator of objValidatorConfig[prop]){
      switch (validator){
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course{
  @IsRequired
  title: string;
  @IsRequired
  @IsPositiveNumber
  price: number;

  constructor(t: string, p: number){
    this.price = p;
    this.title = t;
  }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener("submit", event => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = parseFloat(priceEl.value);

  const createdCourse = new Course(title, price);

  if(!validate(createdCourse)){
    alert("not a valid input");
    return;
  }
  console.log(createdCourse);
})
//#endregion
