function recursiveReverse(arr){
    var reversedArr = [];
    var recursive = function(modifidedArray){
        if(modifidedArray.length === 0) return;
        reversedArr.push(modifidedArray.pop())
        recursive(modifidedArray);
    }
    recursive(arr);

    return reversedArr;
}

console.log(recursiveReverse([1, 2, 3]));