// objects: {age: 17}
// arrays: [1, 2, "3"]
// tuple: [1, 2]
// enum: {ADMIN, READ_ONLY, AUTHOR}
// any: any type (Vanilla JS)

const personAlt: {
  name: string,
  age: number,
  role: [number, string], // tuple
} = {
  name: "Alexandru",
  age: 17,
  role: [2, "author"], 
};

const person = {
  name: "Alexandru",
  age: 17,
  hobbies: ["Chess", "Programming"],
}

let favoriteActivities: string[];
favoriteActivities = ["Sport", "Programming"];

enum Role {ADMIN = 1, READ_ONLY /*2*/, AUTHOR = "AUTHOR"};
console.log(Role.ADMIN);
