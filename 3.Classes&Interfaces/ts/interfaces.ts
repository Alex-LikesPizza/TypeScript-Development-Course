// Basics
interface User {
  name: string,
  age: number,

  greet(phrase: string): void;
}

let user1: User = {
  name: "Alex",
  age: 17,

  greet: function (phrase) {console.log(phrase + " I am " + this.name)},
}
user1.greet("Hello!");

// class -- implements
interface Named {
  readonly name: string,
  readonly surname?: string, // ? - optional
}
interface Person extends Named{
  age: number,
  hobbies: string[],
}
type Greet = {
  greet: () => void,
}
class Student implements Person, Greet {
  readonly name: string;
  age: number;
  hobbies: string[];
  constructor(
    name: string,
    age: number,
    hobbies: string[],
  ){
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  greet(){
    console.log(this.name + ": " + this.age, "Hobbies: ", this.hobbies)
  }
}

const s = new Student("Alex", 17, ["Chess", "Programming"]);
s.greet(); // Alex: 17 Hobbies: ["Chess", "Programming"]

type AddFn = (a: number, b: number) => number;
interface AddFn2 {
  (a: number, b:number): number
};

// indexing
interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with capital letter",
  404: "Page not found", // 404 is converted to "404" (string)
  
}