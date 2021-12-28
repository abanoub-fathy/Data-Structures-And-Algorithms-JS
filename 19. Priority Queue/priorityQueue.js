// class node
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

// min binary heap class
class PriorityQueue {
    constructor() {
        this.values = []
    }

    // get parent method
    getParentIndex(nodeIndex) {
         let parentIndex = Math.floor((nodeIndex - 1) / 2)

         return parentIndex >= 0 ? parentIndex : undefined
    }

    // get children method
    getChildrenIndecies(i) {
        let children = []
        
        // valid index
        if(i >= 0 && i < this.values.length) {
            children.push(2 * i + 1)
            children.push(2 * i + 2)
        } else { // not valid index
            children = [undefined, undefined]
        }

        return children;
    }

    // swap two values of the heap
    swap(i, j) {
        let arr = this.values;
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    // insert method
    enqueue (value, priority) {
        // not valid node parameters
        if(!value || !priority) return false;

        // create node
        let node = new Node(value, priority)
        
        // push at the end of the values array
        this.values.push(node);
        let nodeIndex = this.values.length - 1;
        let nodeParentIndex;

        // bubble up until get the correct position
        while(true) {
            nodeParentIndex = this.getParentIndex(nodeIndex)

            // if the node in the correct spot we return
            if(this.values[nodeParentIndex] === undefined || node.priority > this.values[nodeParentIndex].priority ) return true;

            // swap the nodes
            this.swap(nodeIndex, nodeParentIndex)

            // update the node index
            nodeIndex = nodeParentIndex;
        }
    }

    // extractMax method to remove the root of the heap
    dequeue() {
        // if there is no items to extract
        if (!this.values.length) return null;
        
        // swap both the root and the last value in the heap
        this.swap(0, this.values.length - 1);

        // pop to get the root value
        let min = this.values.pop()

        // re-Arrange the heap
        this.reArrange()

        return min;
    }

    // re-Arrange method
    reArrange() {
        // index of the new root
        let nodeIndex = 0,
            node,
            children = [],
            lChildPriority,
            rChildPriority,
            minChildIndex;
        
        while(true && this.values.length) {
            // node we need to re-arrange
            node = this.values[nodeIndex]

            // get the children of the new root
            children = this.getChildrenIndecies(nodeIndex)
            lChildPriority = this.values[children[0]] === undefined ? Infinity : this.values[children[0]].priority;
            rChildPriority = this.values[children[1]] === undefined ? Infinity : this.values[children[1]].priority;

            // check if we are done
            if(node.priority < lChildPriority && node.priority < rChildPriority) return;

            // get the min child 
            if(lChildPriority < rChildPriority) {
                minChildIndex = children[0]
            } else {
                minChildIndex = children[1]
            }

            // swap the node with the larger value of the children
            this.swap(nodeIndex, minChildIndex)

            // set new value for nodeIndex
            nodeIndex = minChildIndex;
        }
    }

}

/*
       2
    /    \
   4     17
  /  \    /  \
 15  20  44  55
 / \
35  16


// initial values
[4, 16, 17, 35, 20, 44, 55]

// adding 15
[4, 15, 17, 16, 20, 44, 55, 35]

// adding 2
[2, 4, 17, 15, 20, 44, 55, 35, 16]

*/

let p = new PriorityQueue()
p.enqueue("a", 4)
p.enqueue("a", 16)
p.enqueue("a", 17)
p.enqueue("a", 35)
p.enqueue("a", 20)
p.enqueue("a", 44)
p.enqueue("a", 55)

p.dequeue()

// dequeue

/*
       4
    /    \
   15     17
  /  \    /  \
 16  20  44  55
 / 
35  


// initial values
[2, 4, 17, 15, 20, 44, 55, 35, 16]

// after extractMin
[4, 15, 17, 16, 20, 44, 55, 35]
*/