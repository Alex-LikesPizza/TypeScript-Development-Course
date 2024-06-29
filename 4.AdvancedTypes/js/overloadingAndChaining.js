"use strict";
var _a;
function addOrConcat(n1, n2) {
    if (typeof n1 == "string" || typeof n2 == "string") {
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
};
let notLoadedUser = {};
console.log((_a = loadedUser === null || loadedUser === void 0 ? void 0 : loadedUser.data) === null || _a === void 0 ? void 0 : _a.name); // "Mike"
// console.log(notLoadedUser?.data?.name); // undefined  (Error because is compiled. Undefined could occur at runtime)
//#endregion
//#region ---------------- Nullish Coalescing ----------------
let userInput = '';
const userDataA = userInput || "Not found"; // "Not found" for any falsy value, including: 0 and ''
const userDataB = userInput !== null && userInput !== void 0 ? userInput : "Not found"; // "Not found" only for: "null" and "undefined"
