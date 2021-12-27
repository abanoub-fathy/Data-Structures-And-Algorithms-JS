// max binaryheap class
class maxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // get parent method
  getParentIndex(nodeIndex) {
    let parentIndex = Math.floor((nodeIndex - 1) / 2);

    return parentIndex >= 0 ? parentIndex : undefined;
  }

  // get children method
  getChildrenIndecies(i) {
    let children = [];

    // valid index
    if (i >= 0 && i < this.values.length) {
      children.push(2 * i + 1);
      children.push(2 * i + 2);
    } else {
      // not valid index
      children = [undefined, undefined];
    }

    return children;
  }

  // swap two values of the heap
  swap(i, j) {
    let arr = this.values;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // insert method
  insert(node) {
    if (!node || this.values.includes(node)) return false;

    // push at the end of the values array
    this.values.push(node);
    let nodeIndex = this.values.length - 1;
    let nodeParentIndex;

    // bubble up until get the correct position
    while (true) {
      nodeParentIndex = this.getParentIndex(nodeIndex);

      // if the node in the correct spot we return
      if (
        node < this.values[nodeParentIndex] ||
        this.values[nodeParentIndex] === undefined
      )
        return true;

      // swap the nodes
      this.swap(nodeIndex, nodeParentIndex);

      // update the node index
      nodeIndex = nodeParentIndex;
    }
  }

  // extractMax method to remove the root of the heap
  extractMax() {
    // if there is no items to extract
    if (!this.values.length) return undefined;

    // swap both the root and the last value in the heap
    this.swap(0, this.values.length - 1);

    // pop to get the root value
    let max = this.values.pop();

    // re-Arrange the heap
    this.reArrange();

    return max;
  }

  // re-Arrange method
  reArrange() {
    // index of the new root
    let nodeIndex = 0,
      node,
      children = [],
      lChild,
      rChild,
      maxChildIndex;

    while (true && this.values.length) {
      // node we need to re-arrange
      node = this.values[nodeIndex];

      // get the children of the new root
      children = this.getChildrenIndecies(nodeIndex);
      lChild =
        this.values[children[0]] === undefined
          ? -Infinity
          : this.values[children[0]];
      rChild =
        this.values[children[1]] === undefined
          ? -Infinity
          : this.values[children[1]];

      // check if we are done
      if (node > lChild && node > rChild) return;

      // get the max child
      if (lChild > rChild) {
        maxChildIndex = children[0];
      } else {
        maxChildIndex = children[1];
      }

      // swap the node with the larger value of the children
      this.swap(nodeIndex, maxChildIndex);

      // set new value for nodeIndex
      nodeIndex = maxChildIndex;
    }
  }
}

/*
      60
    /   \
  50     30
 /  \    /  \
35  16  23  17
/ \
4  20

// initial values
[50, 20, 30, 4, 16, 23, 17]

// adding 60
[60, 50, 30, 20, 16, 23, 17, 4]

// adding 35
[60, 50, 30, 35, 16, 23, 17, 4, 20]

*/

let heap = new maxBinaryHeap();
heap.insert(50);
heap.insert(20);
heap.insert(30);
heap.insert(4);
heap.insert(16);
heap.insert(23);
heap.insert(17);
heap.extractMax();
