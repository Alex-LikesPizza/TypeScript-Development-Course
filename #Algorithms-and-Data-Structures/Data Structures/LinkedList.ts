/*
Pros:
  Fast Insertions
  Fast Deletions
  Ordered
  Flexible Size
Cons:
  Slow Lookup
  More Memory
*/


interface LinkedListNode{
  value: any,
  next: LinkedListNode | null,
}

// let linkedList : {head: LinkedListNode} = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }
class ListNode implements LinkedListNode {
  value: any;
  next: LinkedListNode | null;

  constructor(value: any){
    this.value = value;
    this.next = null
  }
}
class LinkedList {
  head: LinkedListNode
  tail: LinkedListNode
  length: number

  constructor(value : any){
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  at(index: number){
    let currentNode = this.head;
    for(let i = 0; i < index; i++){
      if(!currentNode.next){
        return this.tail;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  append(value: any){
    const prevTail = this.tail;
    this.tail = new ListNode(value);
    prevTail.next = this.tail;
    this.length++;
    return this;
  }
  prepend(value: any){
    const prevHead = this.head;
    this.head = new ListNode(value);
    this.head.next = prevHead;
    this.length++;
    return this;
  }
  insert(index: number, value: any){
    const newNode = new ListNode(value);
    if(index === 0)
      return this.prepend(value);

    let prevNode = this.at(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    
    this.length++;
    return this;
  }
  unshift(){
    const prevFirst = JSON.parse(JSON.stringify(this.head));
    if(this.head.next) this.head = this.head.next;
    else this.head.value = null;
    this.length--;
    return prevFirst; 
  }
  pop(){
    if(this.length === 0) return null;
    const newLastNode = this.at(this.length - 2);
    const lastNode = this.at(this.length - 1);
    if(newLastNode)
      newLastNode.next = null;
    this.length--;
    return lastNode;
  }
  delete(index: number){
    if(index === 0){
      return this.unshift();
    }
    this.length--;
    const prevDeleteNode = this.at(index - 1);
    const nextDeleteNode = prevDeleteNode.next?.next;
    prevDeleteNode.next = nextDeleteNode? nextDeleteNode : null;
  }
  reverse() {
    let currentNode: LinkedListNode | null = this.head;
    let previousNode: LinkedListNode | null = null;
    let nextNode: LinkedListNode | null = null;
  
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
  
    const newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;
    this.tail.next = null;
  }
}

const list = new LinkedList(1);

list.append(2);
list.append(3);
list.append(4);
list.reverse();

console.log(list);