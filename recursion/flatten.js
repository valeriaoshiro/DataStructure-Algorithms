/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

var flatten = function(arr){
    var newArr = [];
    if(!Array.isArray(arr)) newArr.push(arr);
    else {
        newArr = arr.pop()flatten()
    }


    return newArr;
}

console.log(flatten([1,[2],[3, [[4]]]]));

/*
{1}




*/