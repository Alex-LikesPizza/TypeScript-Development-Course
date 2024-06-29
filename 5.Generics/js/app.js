"use strict";
//#region  ---------- Generic Examples -----------
let employees = []; // string[]
employees.push("Mark");
employees.push("Simon");
// employees.push(null); // Error: null is not of type string
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("One second passed");
    }, 1000);
});
//#endregion
//#region  ----------  Generic functions -----------
// example1
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const obj1 = { name: "Max" };
const obj2 = { age: 21 };
const mergedObject = merge(obj1, obj2);
mergedObject.age = 22;
function countAndDescribe(element) {
    let descriptionText = "Has 0 length";
    if (element.length >= 1) {
        descriptionText = "Has length of " + element.length;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe([])); // [[],  Has 0 length]
console.log(countAndDescribe(["Carnivores", "Herbivores", "Omnivores"])); // [["Carnivores", "Herbivores", "Omnivores"],  Has length of 3]
console.log(countAndDescribe({ length: 2 })); // [{length: 2} Has length of 2]
// example3
function logKey(obj, key) {
    console.log("logKey value:", obj[key]);
}
const keyObj = {
    name: "Alex",
    age: 17,
};
logKey(keyObj, "name");
logKey(keyObj, "age");
// logKey(keyObj, "hobbies"); // Error: key hobbies not in keyObj
//#endregion
//#region ----------- Generic Classes ---------------
class DataStorage {
    constructor() {
        this.data = [];
    }
    getItems() {
        return [...this.data];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
}
let stringStorage = new DataStorage();
stringStorage.addItem("Lorem");
stringStorage.addItem("Ipsum");
stringStorage.removeItem("Lorem");
console.log(stringStorage.getItems());
let student = {}; // applies optional operator to all types
student.name = "Kevin";
student.age = 19;
const names = ["Max", "Allan"];
// names.push("Alex"); // Error: Property 'push' does not exist on type 'readonly string[]'
