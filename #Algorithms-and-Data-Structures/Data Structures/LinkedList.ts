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
    let currentNode = this.head;
    for(let i = 0; i < index - 1; i++){
      currentNode = currentNode.next
    }
  }
}

const list = new LinkedList(10);

list.append(5);
list.append(16);
list.prepend(1);
list.insert(2, 2);

console.log(list);