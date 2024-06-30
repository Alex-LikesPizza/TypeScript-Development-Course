//#region  ---------- Generic Examples -----------

let employees: Array<string> = []; // string[]
employees.push("Mark");
employees.push("Simon");
// employees.push(null); // Error: null is not of type string
let promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("One second passed");
  }, 1000);
});
//#endregion

//#region  ----------  Generic functions -----------
  // example1
function merge<T extends object, U extends object>(objA: T, objB: U){
  return Object.assign(objA, objB);
}
const obj1 = {name: "Max"};
const obj2 = {age: 21};
const mergedObject = merge(obj1, obj2);
mergedObject.age = 22;

  // example2
interface Lengthy {
  length: number,
}
function countAndDescribe<T extends Lengthy>(element: T) : [T, string]{
  let descriptionText = "Has 0 length";
  if(element.length >= 1){
    descriptionText = "Has length of " + element.length; 
  }
  return [element, descriptionText];
}
console.log(countAndDescribe([])); // [[],  Has 0 length]
console.log(countAndDescribe(["Carnivores", "Herbivores", "Omnivores"])); // [["Carnivores", "Herbivores", "Omnivores"],  Has length of 3]
console.log(countAndDescribe({length: 2})); // [{length: 2} Has length of 2]

  // example3
function logKey<T extends object, U extends keyof T>(obj: T, key: U){
  console.log("logKey value:",obj[key])
}
const keyObj = {
  name: "Alex",
  age: 17,
}
logKey(keyObj, "name");
logKey(keyObj, "age");
// logKey(keyObj, "hobbies"); // Error: key hobbies not in keyObj
//#endregion

//#region ----------- Generic Classes ---------------
class DataStorage<T>{
  private data: Array<T> = [];

  getItems(){
    return [...this.data];
  }
  addItem(item: T){
    this.data.push(item);
  }
  removeItem(item: T){
    this.data.splice(this.data.indexOf(item), 1);
  }
}
let stringStorage = new DataStorage<string>();

stringStorage.addItem("Lorem");
stringStorage.addItem("Ipsum");
stringStorage.removeItem("Lorem");
console.log(stringStorage.getItems());
//#endregion

//#region ---------- Partial/Readonly Generics -------------
interface Person {
  name: string,
  age: number,
  birthday: Date,
}

let student: Partial<Person> = {}; // applies optional operator to all types
student.name = "Kevin";
student.age = 19;

const names: Readonly<Array<string>> = ["Max", "Allan"];
// names.push("Alex"); // Error: Property 'push' does not exist on type 'readonly string[]'
//#endregion