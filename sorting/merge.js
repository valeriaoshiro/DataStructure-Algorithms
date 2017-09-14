function mergeSort(arr){
    if(arr.length <= 1) return arr;

    var leftHalf = arr.slice(0, arr.length/2);
    var rightHalf = arr.slice(arr.length/2);
    var leftSorted = mergeSort(leftHalf);
    var rightSorted = mergeSort(rightHalf);

    return merge(leftSorted, rightSorted);
}

function merge(arrLeft, arrRight){
    var result = [];
    var leftPointer = 0;
    var rightPointer = 0;
    
    while(result.length < (arrLeft.length + arrRight.length)){
        if(leftPointer === arrLeft.length){
            result = result.concat(arrRight.slice(rightPointer));
        } else if(rightPointer === arrRight.length){
            result = result.concat(arrLeft.slice(leftPointer));
        } else if(arrLeft[leftPointer] <= arrRight[rightPointer]){
            result.push(arrLeft[leftPointer]);
            leftPointer++;
        } else {
            result.push(arrRight[rightPointer]);
            rightPointer++;
        }
    }
    return result;
}

console.log(mergeSort([8,4,2,5,3,6,1,9,7]));