class LinkedListNode<T> {
  value: T;
  nextNode: LinkedListNode<T>;

  constructor(val: T, next: LinkedListNode<T>){
    this.value = val;
    this.nextNode = next;
  }

  deleteNext(){
    this.nextNode = this.nextNode.nextNode;
  }
}

class LinkedList<T> {
  list: LinkedListNode<T>[];

  pushBack(value: T){
    
  }
}