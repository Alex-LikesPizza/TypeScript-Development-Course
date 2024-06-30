"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//#region ----------- Decorator of class ---------------
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Alex";
        console.log("Creating Person");
    }
};
Person = __decorate([
    Logger
], Person);
//#endregion
//#region ----------- Decorator Factory ---------------
function LoggerFactory(logText) {
    return function (constructor) {
        console.log(logText);
        console.log(constructor);
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "Mark";
        console.log("Creating Person2");
    }
};
Person2 = __decorate([
    LoggerFactory("Logging Mark: ")
], Person2);
//#endregion
//#region ------------- Hooking DOM content with Decorators ---------------
function AddToDom(message, hookId) {
    return function (ogConstructor) {
        // const hookElement = document.getElementById(hookId);
        // const person = new ogConstructor();
        // if(hookElement){
        //   hookElement.querySelector("h1")!.textContent = person.name;
        //   hookElement.querySelector("p")!.textContent = message;
        // }
        return class extends ogConstructor {
            constructor(...args) {
                super();
                const hookElement = document.getElementById(hookId);
                if (hookElement) {
                    hookElement.querySelector("h1").textContent = this.name;
                    hookElement.querySelector("p").textContent = message;
                }
            }
        };
    };
}
let Student = class Student {
    constructor() {
        this.name = "Alex";
        console.log("constructor called for Student Class");
    }
};
Student = __decorate([
    LoggerFactory("Creating New Student Class"),
    AddToDom("Hello!", "app")
], Student);
let student = new Student();
//#endregion
//#region ---------- Decorators of other stuff ------------------
function LogProperty(target, propertyName) {
    console.log("Property Decorator: ");
    console.log(target, propertyName);
}
function LogAccessor(target, name, descriptor) {
    console.log("Accessor Decorator: ");
    console.log("Target: ", target, "\nName: ", name, "\nDescriptor", descriptor);
}
function LogMethod(target, name, descriptor) {
    console.log("Method Decorator: ");
    console.log("Target: ", target, "\nName: ", name, "\nDescriptor", descriptor);
}
function LogParameter(target, name, position) {
    console.log("Parameter Decorator: ");
    console.log("Target: ", target, "\nName: ", name, "\nPosition: ", position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else
            throw Error("Price must be greater than 0");
    }
    getPrice() {
        return this._price;
    }
}
__decorate([
    LogProperty
], Product.prototype, "title", void 0);
__decorate([
    LogProperty
], Product.prototype, "_price", void 0);
__decorate([
    LogAccessor,
    __param(0, LogParameter)
], Product.prototype, "price", null);
__decorate([
    LogMethod
], Product.prototype, "getPrice", null);
;
const registeredValidators = {};
function IsRequired(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'required'] });
}
function IsPositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
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
class Course {
    constructor(t, p) {
        this.price = p;
        this.title = t;
    }
}
__decorate([
    IsRequired
], Course.prototype, "title", void 0);
__decorate([
    IsRequired,
    IsPositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener("submit", event => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = parseFloat(priceEl.value);
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("not a valid input");
        return;
    }
    console.log(createdCourse);
});
//#endregion
