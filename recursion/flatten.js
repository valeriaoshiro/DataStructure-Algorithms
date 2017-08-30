/*
Implement a function that flattens a nested array.
flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

var flatten = function(arr){
    var newArr = [];
    arr.forEach(elem => {
        if(!Array.isArray(elem)) newArr.push(elem);
        else {
            newArr = newArr.concat(flatten(elem))
        }
    })
    return newArr;
}
console.log(flatten([1,[2],[3, [[4]]]]));
