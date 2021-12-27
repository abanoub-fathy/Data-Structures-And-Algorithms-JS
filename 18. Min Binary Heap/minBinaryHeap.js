// min binary heap class
class minBinaryHeap {
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
    insert (node) {
        if(!node || this.values.includes(node)) return false;
        
        // push at the end of the values array
        this.values.push(node);
        let nodeIndex = this.values.length - 1;
        let nodeParentIndex;

        // bubble up until get the correct position
        while(true) {
            nodeParentIndex = this.getParentIndex(nodeIndex)

            // if the node in the correct spot we return
            if(node > this.values[nodeParentIndex] || this.values[nodeParentIndex] === undefined) return true;

            // swap the nodes
            this.swap(nodeIndex, nodeParentIndex)

            // update the node index
            nodeIndex = nodeParentIndex;
        }
    }

    // extractMax method to remove the root of the heap
    extractMin() {
        // if there is no items to extract
        if (!this.values.length) return undefined;
        
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
            lChild,
            rChild,
            minChildIndex;
        
        while(true && this.values.length) {
            // node we need to re-arrange
            node = this.values[nodeIndex]

            // get the children of the new root
            children = this.getChildrenIndecies(nodeIndex)
            lChild = this.values[children[0]] === undefined ? Infinity : this.values[children[0]];
            rChild = this.values[children[1]] === undefined ? Infinity : this.values[children[1]];

            // check if we are done
            if(node < lChild && node < rChild) return;

            // get the min child 
            if(lChild < rChild) {
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

let heap = new minBinaryHeap()
heap.insert(4)
heap.insert(16)
heap.insert(17)
heap.insert(35)
heap.insert(20)
heap.insert(44)
heap.insert(55)
// heap.extractMin()

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