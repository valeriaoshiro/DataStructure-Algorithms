function Queue(capacity) {
  this.storage = {};
  this.lastIndex = 0;
  this.firstIndex = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

Queue.prototype.dequeue = function() {
  var firstElement = this.storage[this.firstIndex];
  delete this.storage[String(this.firstIndex)];
  this.firstIndex++;
  return this.firstElement;
};

Queue.prototype.peek = function() {
 return this.storage[this.firstIndex];
};

Queue.prototype.count = function() {
  return this.lastIndex - this.firstIndex;
};

var newQueue = new Queue();
newQueue.enqueue("dog");
newQueue.enqueue("cat");
newQueue.peek()l
newQueue.dequeue();
console.log(newQueue.count());
console.log(newQueue);
