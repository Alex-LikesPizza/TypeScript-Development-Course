/*
Pros:
  Fast Insert
  Fast Lookup
  Fast Delete
  Fast Search
  Flexible Keys
Cons:
  Occasionally Lookups can be O(n) because of collisions
  Unordered
  Slow Key Iteration
*/

let user = {
  age: 18,
  name: "Alex",
  scream: function () {
    console.log("Aah!");
  }
}
user.name; // O(1)
user.age = 19; // O(1)
// const map = new Map(); // create a hash table with hashes for any data type
// const set = new Set(); // create a set. Sets have only the Hash as a value 
// Map:[key, value] | Set:[valueHashKey(auto), value];
// Class implementation

class HashTable {
  data: [string, any][][];

  constructor(public length: number){
    this.data = new Array(length);
  }

  private hash(key: string){ // O(1)
    let hash = 0;
    for (let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.length;
    }
    return hash;
  } 
  set(key: string, value: any){ // O(1)
    const hash = this.hash(key);
    if(!this.data[hash]){
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
    return this.data;
  }
  get(key: string){ // O(1) -> O(n)
    const hash = this.hash(key);
    const currentBucket = this.data[hash];
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}
const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 2);

console.log(myHashTable.get("apples"), myHashTable.get("grapes"));