var insertion = function(arr){
    var newArr = [...arr];

    for(var i = 1; i < newArr.length; i++){ 
        var element = newArr[i]; 
        var j = i; 
        while(j > 0 && (newArr[j - 1] > element)){ 
            newArr[j] = newArr[j - 1]; 
            j = j - 1; 
        }
        newArr[j] = element 
    }

    return newArr;
}

console.log(insertion([1,6,2,4,3,8,9]));