// var insertion = function(arr){
//     var newArr = [...arr];

//     for(var i = 1; i < newArr.length; i++){ 
//         var element = newArr[i]; 
//         var j = i; 
//         while(j > 0 && (newArr[j - 1] > element)){ 
//             newArr[j] = newArr[j - 1]; 
//             j = j - 1; 
//         }
//         newArr[j] = element 
//     }

//     return newArr;
// }

// 09/10/17 two arrays
// function insertion(arr){
//     var oldArr = [...arr];
//     var newArr = [];

//     while(oldArr.length > 0){
//         var popped = oldArr.shift();
//         if(newArr.length === 0) {
//             newArr.push(popped);
//         } else {
//             newArr.some((elem, index) => {
//                 if(elem > popped){
//                     newArr.splice(index, 0, popped);
//                     return true;
//                 } else if(index === newArr.length-1){
//                     newArr.push(popped);
//                 }
//             })
//         }
//     }
//     return newArr;
// }

// 09/13/17
function insertion(arr){
    var newArr = [...arr];
    for(var i = 1; i < newArr.length; i++){
        var element = newArr[i];
        var j = i;
        while(j > 0 && (newArr[j - 1] > element)){
            newArr[j] = newArr[j-1];
            j--;
        }
        newArr[j] = element;
    }
    return newArr;
}

console.log(insertion([1,6,2,4,3,8,9]));
console.log(insertion([3,1,2]));

