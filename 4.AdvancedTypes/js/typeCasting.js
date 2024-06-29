"use strict";
const userInputElement = document.getElementById("user-input"); // ! - can be null
const userInputElementNotNull = document.getElementById("user-input"); // ! - not null
const userInputElementA = document.getElementById("user-input"); // method1
const userInputElementB = document.getElementById("user-input"); // method2
if (userInputElement) {
    userInputElement.value = "Hello!"; // type casting with (), method1
    userInputElement.value = "Hello!"; // type casting with (), method2
}
