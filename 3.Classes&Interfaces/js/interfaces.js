"use strict";
let user1 = {
    name: "Alex",
    age: 17,
    greet: function (phrase) { console.log(phrase + " I am " + this.name); },
};
user1.greet("Hello!");
class Student {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    greet() {
        console.log(this.name + ": " + this.age, "Hobbies: ", this.hobbies);
    }
}
const s = new Student("Alex", 17, ["Chess", "Programming"]);
s.greet(); // Alex: 17 Hobbies: ["Chess", "Programming"]
;
