function Node(value){
    this.value = value;
    this.next = null;
}

function LinkedList(value){
    this.head = new Node(value);
    this.tail = this.head;
}

LinkedList.prototype.addHead = function(value){
    var newHead = new Node(value);
    var oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
    return newHead;
}

LinkedList.prototype.addAfter = function(node, value){
    var newNode = new Node(value);
    var oldNode = node.next;
    node.next = newNode;
    newNode.next = oldNode;
    if(this.tail === node) this.tail = newNode;
    return newNode;
}

LinkedList.prototype.addAtEnd = function(value){
    var newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode;
}

LinkedList.prototype.removeHead = function(){
    var newHead = this.head.next;
    var oldHead = this.head;
    this.head = newHead;
    oldHead.next = null;
    return oldHead;
}

LinkedList.prototype.removeAfter = function(node){
    var toBeDeletedNode = node.next;
    if(!toBeDeletedNode) return;
    var newNextNode = toBeDeletedNode.next;
    toBeDeletedNode.next = null;
    node.next = newNextNode;
    if(this.tail === toBeDeletedNode) this.tail = node;
    return toBeDeletedNode;
}

LinkedList.prototype.forEach = function(cb){
    var node = this.head;
    
    while(node){
        cb(node.value);
        node = node.next;
    }
}

LinkedList.prototype.print = function(){
    var result = [];
    this.forEach(node => {
        result.push(node);
    });
    return result.join(', ');
}

var myList = new LinkedList(1);
myList.addAtEnd(2)
myList.addHead(0);
myList.addAfter(myList.tail, 3);
myList.removeHead();
myList.removeAfter(myList.head);
myList.forEach(node => console.log(node));