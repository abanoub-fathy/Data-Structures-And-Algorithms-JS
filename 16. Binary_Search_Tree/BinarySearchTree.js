class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    enqueue(val) {
        this.items.push(val)
        this.length++;
    }

    dequeue() {
        if(this.length > 0) {
            this.length--;
            return this.items.shift()
        }
       
    }
}

class BST {
    constructor() {
        this.root = null
    }

    // method for insert new node in the tree
    insert(val) {
        // create new node to be inserted
        let newNode = new Node(val);

        // insert for empty tree
        if(!this.root) {
            this.root = newNode;
            return true;
        }
        
        // node we compare with
        let nodeToCompare = this.root;

        while(nodeToCompare) {
            if(newNode.value < nodeToCompare.value) {
                if(nodeToCompare.left === null) {
                    nodeToCompare.left = newNode;
                    return true;
                } 
                nodeToCompare = nodeToCompare.left;
            } else if(newNode.value > nodeToCompare.value){
                if(nodeToCompare.right === null) {
                    nodeToCompare.right = newNode;
                    return true;
                } 
                nodeToCompare = nodeToCompare.right;
            } else {
                // insert existing node
                 return false;
            }
        }
    }

    // find method that tells us if the node is existed in the tree or not
    find(valueToFind) {

        // current nodeToCompare
        let nodeToCompare = this.root;

        while(nodeToCompare) {
            if(valueToFind === nodeToCompare.value) {
                return true;
            }

            // searching for the node
            if(valueToFind > nodeToCompare.value) {
                nodeToCompare = nodeToCompare.right;
            } else {
                nodeToCompare = nodeToCompare.left;
            }
        }

        // we can't get the node
        return false;
    }

    // traversal method BFS ==> breadth first search
    BFS() {
        // create new queue
        let queue = new Queue()

        // create the visited array
        let visited = []

        // add the root to the queue
        queue.enqueue(this.root)

        // as the queue is not empty
        while (queue.length) {

            // if the working node in the queue has left and right add it to the queue
            let currentNode = queue.items[0]

            if(currentNode.left) queue.enqueue(currentNode.left)

            if(currentNode.right) queue.enqueue(currentNode.right)

            // put this currentNode in the visited array
            visited.push(queue.dequeue().value)
        }

        return visited;
    }

    // DFS PreOrder traversal
    preOrderDFS() {
        let currentNode = this.root;
        let visited = []

        // helper function add to visited
        const addNode = (node) => {
            visited.push(node.value);
            if (node.left) addNode(node.left)
            if(node.right) addNode(node.right)
        }
        
        if(currentNode) addNode(currentNode);
        
        return visited;
    }

    // DFS postorder
    postOrderDFS() {
        let visited = []
        
        const addNode = (node) => {
            if (node.left) addNode(node.left)
            if (node.right) addNode(node.right)
            visited.push(node.value)
        }

        if(this.root) {
            addNode(this.root)
        }

        return visited;
    }

    // DFS inorder
   inOrderDFS() {
        let visited = []
        
        const addNode = (node) => {
            if (node.left) addNode(node.left)
            visited.push(node.value)
            if (node.right) addNode(node.right)
        }

        if(this.root) {
            addNode(this.root)
        }

        return visited;
    }

}

/*
//       10
//    5      13
//  2   7  11   16
*/



let tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(7)
tree.insert(11)
tree.insert(16)




