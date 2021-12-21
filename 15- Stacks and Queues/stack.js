class Node {
    constructor (val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push in the stack add at the beginning
    push(val) {
        // create new node
        let newNode = new Node(val)

        // push for an empty stack
        if(this.size === 0) {
            this.first= newNode;
            this.last = newNode;
        } else { // contatinig items stack
            newNode.next = this.first;
            this.first = newNode;
        }

        // increase the length
        return ++this.size;
    }

    // pop remove from beginnig in stack
    pop() {
        // pop from empty stack
        if(this.size === 0) return null;
        
        let nodeToRemove = this.first;

        // pop from only on item stack
        if(this.size === 1) {
            this.last = null;
        }
        
        // set new lase
        this.first = nodeToRemove.next;

        // decrease size
        this.size--;

        return nodeToRemove.value;
    }
}

