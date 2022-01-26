class Graph {
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
  addEdge(v1, v2) {
    // if v1 or v2 not exist return false
    if (!this.includes(v1) || !this.includes(v2)) return false;

    // add edges
    this.adjacencyList[v1][v2] = true;
    this.adjacencyList[v2][v1] = true;
    return true;
  }

  // remove edge method
  removeEdgeBetween(v1, v2) {
    if (!this.includes(v1) || !this.includes(v2)) return false;
    delete this.adjacencyList[v1][v2];
    delete this.adjacencyList[v2][v1];
    return true;
  }

  // remove vertex method
  removeVertex(vertex) {
    // if the adjacencyList does not have that vertex
    if (!this.includes(vertex)) return false;

    // loop through all edges of the vertex
    for (let connectedVertex in this.adjacencyList[vertex]) {
      this.removeEdgeBetween(vertex, connectedVertex);
    }

    // remove the vertex
    delete this.adjacencyList[vertex];

    // return true
    return true;
  }

  recursiveDFS(start) {
    // visited arr
    let visited = [];

    // mark object
    let previouslyVisited = {};

    // helper function
    const visitVerticies = (v) => {
      // base case
      if (!this.adjacencyList[v] || previouslyVisited[v]) return;

      // recursive case
      visited.push(v);
      previouslyVisited[v] = true;

      for (let adjacentVertex in this.adjacencyList[v]) {
        visitVerticies(adjacentVertex);
      }
    };

    // call the helper function
    visitVerticies(start);

    // return
    return visited;
  }

  iterativeDFS(start) {
    if (!this.adjacencyList[start]) return [];
    let stack = [];
    let visited = [];
    let currentVertex = null;
    let discovered = {};

    // add vertex to the stack
    stack.push(start);

    // loop while the q is not empty
    while (stack.length) {
      // current vertex
      currentVertex = stack.pop();

      // visit the vertex
      visited.push(currentVertex);
      discovered[currentVertex] = true;

      // add neighbours to the stack
      for (let neighbour in this.adjacencyList[currentVertex]) {
        if (!discovered[neighbour]) {
          stack.push(neighbour);
          discovered[neighbour] = true;
        }
      }
    }

    return visited;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

g.recursiveDFS("A");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
