function Stack(capacity) {
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var lastElement = this.storage[this.count];
  this.count--;
  delete this.storage[String(this.count)];
  return lastElement;
};

Stack.prototype.peek = function() {
  return this.storage[this.count - 1];
};
// Time complexity:

Stack.prototype.count = function() {
  return this.count - 1;
};

var newStack = new Stack();
newStack.push("dog");
newStack.pop();

console.log(newStack);