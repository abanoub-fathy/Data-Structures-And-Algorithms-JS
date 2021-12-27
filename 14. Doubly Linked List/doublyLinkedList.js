class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push to the list
    push(value) {

        // create new node
        let newNode = new Node(value)

        // push to an empty list
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else { // not empty list
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // increase the length of the list
        this.length++;
        return this;        
    }

    pop() {
        // if the list is empty
        if(this.length === 0) return null;

        // store the node in var
        let nodeWeRemove = this.tail;

        // one item in the list
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // get the new tail
            let newTail = this.tail.prev;
            newTail.next = null;
            this.tail = newTail;
        }
        
        // decrease the length
        this.length--;
        nodeWeRemove.prev = null;
        return nodeWeRemove;
        
    }

    // shift method remove from the beginning
    shift() {
        if(this.length === 0)  return null;

        // store the old head
        let oldHead = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update the head
            this.head = oldHead.next;
            this.head.prev = null;
        }

        // decrement the length
        this.length--;

        // return the old head
        oldHead.next = null;
        return oldHead.value;
    }

    // unshift method add at beginning
    unshift(val) {
        // create new node
        let newNode = new Node(val);

        // add to empty list
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else { // not empty
           // connect the new node and the head
            newNode.next = this.head;
            this.head.prev = newNode; 
            this.head = newNode;
        }
        
        // increase the length
        this.length++;

        return this;
    }

    // get for getting a node by index
    get(index = undefined) {
        // not a valid index
        if(index < 0 || index >= this.length || index === undefined) return null;

        // middle of the list
        let mid = Math.ceil(this.length / 2) - 1;

        // vars we need
        let currentNode;

        if(index <= mid) { // case the node is close to the start
            currentNode = this.head;
            for(let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
        } else { // case index closer to the end
            currentNode = this.tail;
            for(let i = this.length - 1; i > index; i--) {
                currentNode = currentNode.prev;
            }
        }

        return currentNode;
    }

    // set method to set a node by index
    set(index, val) {
        // undefined value
        if(!val) return false;

        // nodeToSet
        let nodeToSet = this.get(index);
        
        // no node to set
        if(!nodeToSet) return false;

        nodeToSet.value = val;
        return true;
    }

    // insert method
    insert(index, val) {
        // not valid indecies
        if(index < 0 || index > this.length) return false;

        // insert at beginning
        if(index === 0) return !!this.unshift(val);

        // insert at the end
        if(index === this.length) return !!this.push(val);
        
        // not the start or the end
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        newNode.prev = prevNode;
        
        this.length++;
        return true;
    }

    // remove method
    remove (index) {
        // not valid indecies
        if(index < 0 || index >= this.length || index === undefined) return null;

        // remove from beginning
        if(index === 0) return this.shift();

        // remove from the end
        if(index === this.length - 1) return this.pop();
        
        // not the start or the end
        let nodeToRemove = this.get(index)
        let prevNode = nodeToRemove.prev;
        let nextNode = nodeToRemove.next;
        // 1 <-> 2 <-> 3
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        nodeToRemove.next =null;
        nodeToRemove.prev = null;
        
        this.length--;
        return nodeToRemove.value;
    }
}




// for testing
let list = new DoublyLinkedList()
for(let i = 1; i <= 5; i++) {
    list.push(i)
}
