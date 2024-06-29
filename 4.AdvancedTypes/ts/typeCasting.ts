const userInputElement = document.getElementById("user-input")!; // ! - can be null
const userInputElementNotNull = document.getElementById("user-input")!; // ! - not null

const userInputElementA = document.getElementById("user-input") as HTMLInputElement; // method1
const userInputElementB = <HTMLInputElement>document.getElementById("user-input")!; // method2

if(userInputElement){
  (userInputElement as HTMLInputElement).value = "Hello!"; // type casting with (), method1
  (<HTMLInputElement>userInputElement).value = "Hello!"; // type casting with (), method2
}
