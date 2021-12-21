class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push method
    push(val = undefined) {
        if(val === undefined) return false;

        // if the list is empty
        if(this.head === null) {
            this.head = new Node(val);
            this.tail = this.head;
        } else { // list is not empty
            let newNode = new Node(val);
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // pop method
    pop() {
        // empty list
        if(this.length === 0) {
            return null;
        }

        let popVal = this.tail,
            currentNode = this.head;
        
        // list with one item
        if(this.length === 1) {
            this.length--;
            this.head = null;
            this.tail = null;
            return popVal.value;
        }
        

        while(currentNode.next.next) {
            currentNode = currentNode.next;
        }
        
        // set the new tail
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return popVal.value;
    }

    // shift method == removing from the start
    shift() {
        // empty list
        if(this.length === 0) return null;

        let oldHead = this.head;

        // set the new head to be the next item
        this.head = oldHead.next;
        
        // case of one item in the list set tail also to be null
        if(this.length === 1) this.tail = null; 

        this.length--;
        return oldHead.value;
    }

    // unshift method
    unshift(val = undefined) {
        if(val === undefined) return false;

        // create new node
        let newNode = new Node(val);

        // empty list
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else { // not empty list
            newNode.next = this.head;
            this.head = newNode;
        }
        // increase the length
        this.length++;

        return this;
    }

    // get method
    get(index = undefined) {
        // if the index invalid
        if(index === undefined || index >= this.length || index < 0) return undefined;

        // create a node start from the head
        let currentNode = this.head;

        // loop according to the index
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        
        // return the value of the node at that index
        return currentNode;
    }
    
    
    // set method
    set(index = undefined, val = undefined) {
        // we set only if there is an item in that index
        let nodeToUpdate = this.get(index);
        
        if(!nodeToUpdate) return false;

        // update the value
        nodeToUpdate.value = val;
        return true;
    }

    // insert method
    insert(index = 0, val = undefined) {
        // invalid index
        if(index < 0 || index > this.length) return false;
        
        // push at the begining
        if(index === 0) return !!this.unshift(val);

        // push at the end
        if(index === this.length) return !!this.push(val);

    
        // valid index but not the start or the end
        let preNode = this.get(index - 1);
        let afterNode = preNode.next;
        let newNode = new Node(val);

        preNode.next = newNode;
        newNode.next = afterNode;
        this.length += 1;
        return true;
    }

    // remove method
    remove(index = undefined) {
        // invalid index
        if(index < 0 || index >= this.length || index === undefined) return false;

        // remove from the begining
        if(index === 0) return this.shift();

        // remove from the end
        if(index === this.length - 1) return this.pop();

        // valid index between the begining and the end
        let preNode = this.get(index - 1);
        let nodeToRemove = preNode.next;
        let afterNode = nodeToRemove.next;

        preNode.next = afterNode;
        nodeToRemove.next = null;
        this.length--;

        return nodeToRemove.value;
    }

    // reverse the list
    reverse() {
        if(this.length <= 1) return this;

        // swap head and tail
        let head = this.head;
        let tail = this.tail;
        this.tail = head;
        this.head = tail;

        // currentNode
        let nodeToConnectWith = this.tail;  // a
        let currentNode = this.tail.next;   // b
        let nextNode = currentNode.next;    // c


        for(let i = 0; i < this.length - 2; i++) {
            currentNode.next = nodeToConnectWith;

            nodeToConnectWith = currentNode;
            currentNode = nextNode;
            nextNode = currentNode.next;
        }

        this.head.next = nodeToConnectWith;
        this.tail.next = null;
        return this;
    }
    
    // reverse another solution
    reverseList() {
        // swap head and tail
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        // for every node we have pre and next
        let preNode = null;
        let nextNode;

        for(let i = 0; i < 1; i++) {
            nextNode = currentNode.next;
            currentNode.next = preNode;

            preNode = currentNode;
            currentNode = nextNode;
        }

        return this;
    }
}


let list = new SinglyLinkedList()
list.push('a')
list.push('b')
list.push('c')
list.push('d')


/*
 *  a --> b --> c --> d
 *  h                 t
*/