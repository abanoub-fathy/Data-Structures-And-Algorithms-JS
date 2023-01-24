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
  enqueue(value, priority) {
    // not valid node parameters
    if (!value || isNaN(priority)) return false;

    // create node
    let node = new Node(value, priority);

    // push at the end of the values array
    this.values.push(node);
    let nodeIndex = this.values.length - 1;
    let nodeParentIndex;

    // bubble up until get the correct position
    while (true) {
      nodeParentIndex = this.getParentIndex(nodeIndex);

      // if the node in the correct spot we return
      if (
        this.values[nodeParentIndex] === undefined ||
        node.priority > this.values[nodeParentIndex].priority
      )
        return true;

      // swap the nodes
      this.swap(nodeIndex, nodeParentIndex);

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
    let min = this.values.pop();

    // re-Arrange the heap
    this.reArrange();

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

    while (true && this.values.length) {
      // node we need to re-arrange
      node = this.values[nodeIndex];

      // get the children of the new root
      children = this.getChildrenIndecies(nodeIndex);
      lChildPriority =
        this.values[children[0]] === undefined
          ? Infinity
          : this.values[children[0]].priority;
      rChildPriority =
        this.values[children[1]] === undefined
          ? Infinity
          : this.values[children[1]].priority;

      // check if we are done
      if (node.priority <= lChildPriority && node.priority <= rChildPriority)
        return;

      // get the min child
      if (lChildPriority < rChildPriority) {
        minChildIndex = children[0];
      } else {
        minChildIndex = children[1];
      }

      // swap the node with the larger value of the children
      this.swap(nodeIndex, minChildIndex);

      // set new value for nodeIndex
      nodeIndex = minChildIndex;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // check vertex is existed or not
  includes(v) {
    if (this.adjacencyList[v]) {
      return true;
    } else {
      return false;
    }
  }

  // add vertex function
  addVertex(v) {
    // if the vertex is existed
    if (this.includes(v)) return false;

    // add the vertex to the adjacencyList
    this.adjacencyList[v] = {};
    return true;
  }

  // add edge function
  addEdge(v1, v2, weight) {
    // if v1 or v2 not exist return false
    if (!this.includes(v1) || !this.includes(v2) || !weight) return false;

    // add edges
    this.adjacencyList[v1][v2] = weight;
    this.adjacencyList[v2][v1] = weight;
    return true;
  }

  // Dijkstra method
  Dijkstra(start, end) {
    // check if both nodes are existed
    if (!this.includes(start) || !this.includes(end)) return null;

    // declare some vars
    let distances = {};
    let previous = {};
    let queue = new PriorityQueue();
    let currentVertex;
    let newDistance;

    // loop through vertices and intialize vars
    for (let v in this.adjacencyList) {
      if (v === start) {
        distances[v] = 0;
        queue.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        queue.enqueue(v, Infinity);
      }
      previous[v] = null;
    }

    // while there is something in the queue
    while (queue.values.length) {
      // get the minimum from the queue
      currentVertex = queue.dequeue().value;

      if (currentVertex === end) {
        // loop backward
        return {
          path: this.getPath(start, end, previous),
          distance: distances[end],
        };
      }

      // loop through neighbors of the currentVertex
      for (let neighbor in this.adjacencyList[currentVertex]) {
        newDistance =
          distances[currentVertex] +
          this.adjacencyList[currentVertex][neighbor];
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          previous[neighbor] = currentVertex;
          queue.enqueue(neighbor, newDistance);
        }
      }
    }
  }

  // getPath method
  getPath(start, end, path) {
    let currentVertex = end;
    let route = [currentVertex];

    while (currentVertex !== start) {
      currentVertex = path[currentVertex];
      route.push(currentVertex);
    }

    return route.reverse();
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");
// ["A", "C", "D", "F", "E"]
