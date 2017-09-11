// 09/10/17 two arrays
function selection(arr){
    var oldArr = [...arr];
    var newArr = [];
    var highestElem = 0;
    var highestIndex = 0;
    while(oldArr.length > 0) {
        oldArr.forEach((elem, index) => {
            if(elem > highestElem){
                highestElem = elem;
                highestIndex = index;
            }
        })
        newArr.unshift(oldArr[highestIndex]);
        oldArr.splice(highestIndex, 1);
        highestElem = 0;
        highestIndex = 0;
    }
    
    return newArr;
}


console.log(selection([1,6,2,4,3,8,9]))
console.log(selection([3,2,1]))