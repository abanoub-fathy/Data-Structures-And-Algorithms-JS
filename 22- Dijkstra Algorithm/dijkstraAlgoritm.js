class Graph {
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
    addEdge(v1, v2, weight) {
        // if v1 or v2 not exist return false
        if(!this.includes(v1) || !this.includes(v2) || !weight) return false;
        
        // add edges
        this.adjacencyList[v1][v2] = weight;
        this.adjacencyList[v2][v1] = weight;
        return true;
    }
}