class Graph {
	
	constructor() {
		this.nodes = {}
	}
	
	addNode(value) {
		this.nodes[value] = [] 	
	}

	addEdge(fromNode, toNode) {
		this.nodes[fromNode].push(toNode)
		this.nodes[toNode].push(fromNode)
	}

    removeEdge(val1, val2) {
        var index = this.nodes[val1].indexOf(val2);
        this.nodes[val1].splice(index, 1);

        index = this.nodes[val2].indexOf(val1);
        this.nodes[val2].splice(index, 1);
    }

}

const g1 = new Graph 

g1.addNode('A')
g1.addNode('B')
g1.addNode('C')
g1.addNode('D')
g1.addNode('E')

g1.addEdge('A', 'B')
g1.addEdge('B', 'D')
g1.addEdge('B', 'C')
g1.addEdge('D', 'E')

console.log(g1);

g1.removeEdge('A', 'B');

console.log(g1);