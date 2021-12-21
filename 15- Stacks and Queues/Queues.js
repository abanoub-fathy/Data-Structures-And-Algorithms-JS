class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  // enque ==> adding at the end
  // 1 - 2 - 3
  enque(val) {
    // create new node
    let newNode = new Node(val);
    
    if(!this.first) { // adding to empty q
      this.first = newNode;
      this.last = newNode;
    } else { // adding to not empty q
      this.last.next = newNode;
      this.last = newNode;
    }
    
    return ++this.size;
  }
  
  // deque ==> remove from the begining
  deque() {
      // case empty q
      if(this.size === 0) return null;

      let nodeToRemove = this.first;

      // case of only one node q
      if(this.size === 1) {
          this.last = null;
      }
      
      // re assign the first to be the next node
      this.first = this.first.next;

      this.size--;
      return nodeToRemove.value;
  }
}