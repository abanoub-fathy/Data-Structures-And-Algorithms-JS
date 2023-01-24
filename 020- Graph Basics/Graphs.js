class Graph  {
    constructor() {
        this.adjacencyList = {}
    }

    // check vertex is existed or not
    includes(v) {
        if(this.adjacencyList[v]) {
            return true;
        } else {
            return false;
        }
    }

    // add vertex function
    addVertex(v) {
        // if the vertex is existed
        if(this.includes(v)) return false;
        
        // add the vertex to the adjacencyList
        this.adjacencyList[v] = {}
        return true;
    }

    // add edge function
    addEdge(v1, v2) {
        // if v1 or v2 not exist return false
        if(!this.includes(v1) || !this.includes(v2)) return false;
        
        // add edges
        this.adjacencyList[v1][v2] = true;
        this.adjacencyList[v2][v1] = true;
        return true;
    }

    // remove edge method
    removeEdgeBetween(v1, v2) {
        if (!this.includes(v1) || !this.includes(v2)) return false;
        delete this.adjacencyList[v1][v2]
        delete this.adjacencyList[v2][v1]
        return true;
    }

    // remove vertex method
    removeVertex (vertex) {
        // if the adjacencyList does not have that vertex
        if(!this.includes(vertex)) return false;

        // loop through all edges of the vertex
        for (let connectedVertex in this.adjacencyList[vertex]) {
            this.removeEdgeBetween(vertex, connectedVertex)
        }

        // remove the vertex
        delete this.adjacencyList[vertex];

        // return true
        return true;
    }
}

let g = new Graph()
g.addVertex("cairo")
g.addVertex("alex")
g.addVertex("sohag")

g.addEdge("cairo", "alex")
g.addEdge("sohag", "alex")