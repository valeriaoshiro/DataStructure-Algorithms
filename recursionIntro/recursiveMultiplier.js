function recursiveMultiplier(arr, num){
    var newArray = [];
    var recurse = function(modifiedArray, num){
        if(modifiedArray.length === 0 ) return;
        newArray.push(modifiedArray.shift() * num);
        recurse(modifiedArray, num);
    }

    recurse(arr, num);

    return newArray;
}

console.log(recursiveMultiplier([1,2,3], 2));