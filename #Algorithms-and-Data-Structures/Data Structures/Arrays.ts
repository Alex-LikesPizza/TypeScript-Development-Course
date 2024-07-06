
/* 
Pros:
  Fast lookup
  Fast Push / Pop
  Ordered
Cons:
  Slow Insertion
  Slow Deletion
*/

const strings = ["a", "b", "c", "d"];

strings[2]; // O(1)
strings.push("e"); // O(1) , could be O(n)
strings.pop(); // O(1)

strings.unshift("x"); // O(n)
strings.shift(); // O(n)
strings.splice(3, 0, "c1"); // O(n)

// Class 
interface Arr<T>{
  [n: number] : T;
}
class MyArray<T> {
  private length: number;
  private data: Arr<T>;
  
  constructor(){
    this.length = 0;
    this.data = {};
  }
  private shiftIndex(index: number){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  get (index: number){
    return this.data[index];
  }
  push(item: any){
    this.data[this.length++] = item;
    return this.length;
  }
  pop(){
    let last = this.data[--this.length];
    delete this.data[this.length];
    return last;
  }
  delete(index: number){
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
}

const newArr = new MyArray<number>();
// Test 1
// console.log(newArr.get(0));
// newArr.push(1);
// console.log(newArr.get(0));
// newArr.push(2);
// console.log(newArr.pop());
// console.log(newArr)

// Test 2
newArr.push(0);
// newArr.push(1);
// newArr.push(2);
// newArr.push(3);
// newArr.push(4);
// console.log("Complete Array: ", newArr);
// newArr.delete(0);
// console.log("Delete Array: ", newArr);