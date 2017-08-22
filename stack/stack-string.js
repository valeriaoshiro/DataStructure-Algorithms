var Stack = function(){
    this.storage = "";
};

Stack.prototype.push = function(val){
    if(this.storage) this.storage += "-" + val;
    else this.storage = val;
};

Stack.prototype.pop = function(){
    var lastElement;
    if(this.storage.lastIndexOf("-") === -1 ) {
        lastElement = this.storage;
        this.storage = "";
        return lastElement;
    } else {
        lastElement = this.storage.slice(this.storage.lastIndexOf("-") + 1);
        this.storage = this.storage.substr(0, this.storage.lastIndexOf("-"));    
        return lastElement;
    }
};

Stack.prototype.size = function(){
    var currentIndex = 0;
    var count = 0;
    if(!this.storage) return 0;
    while(this.storage.length > currentIndex){
        if(this.storage.indexOf("-", currentIndex) > 0) {
            count++;
            currentIndex = this.storage.indexOf("-", currentIndex) + 1;
        } else {
            count++;
            return count;
        }
    }
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
myWeeklyMenu.push("Steak");
myWeeklyMenu.push("Chocolate");
myWeeklyMenu.pop();
myWeeklyMenu.pop();
myWeeklyMenu.pop();
console.log("Size", myWeeklyMenu.size());

console.log(myWeeklyMenu);