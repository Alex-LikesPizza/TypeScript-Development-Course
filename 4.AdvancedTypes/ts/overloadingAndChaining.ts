//#region ---------------- Function Overloading ----------------
type AddType = number | string;

function addOrConcat(n1: string, n2: string): string;
function addOrConcat(n1: string, n2: number): string;
function addOrConcat(n1: number, n2: string): string;
function addOrConcat(n1: number, n2: number): number;
function addOrConcat(n1: AddType, n2: AddType){
  if(typeof n1 == "string" || typeof n2 == "string"){
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}
//#endregion

//#region ---------------- Optional Chaining ----------------
let loadedUser = {
  data: {
    name: "Mike"
  }
}
let notLoadedUser = {
  
}
console.log(loadedUser?.data?.name); // "Mike"
// console.log(notLoadedUser?.data?.name); // undefined  (Error because is compiled. Undefined could occur at runtime)
//#endregion

//#region ---------------- Nullish Coalescing ----------------
let userInput = '';

const userDataA = userInput || "Not found"; // "Not found" for any falsy value, including: 0 and ''
const userDataB = userInput ?? "Not found"; // "Not found" only for: "null" and "undefined"