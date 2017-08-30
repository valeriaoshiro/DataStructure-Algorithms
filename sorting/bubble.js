// var bubble = function(arr){
//     var left = 0;
//     var right = 1;
//     var oldArr = [...arr];
//     var newArr = [];

//     if(oldArr.length === 0) return oldArr;

//     while(oldArr.length >= 1){
//         for(var i = 0; i < oldArr.length; i++){
//             if(oldArr[left] > oldArr[right]){
//                 var temp = oldArr[left];
//                 oldArr[left] = oldArr[right];
//                 oldArr[right] = temp;
                
//             }
//             left++;
//             right++;
//         }
//         left = 0;
//         right = 1;
//         newArr.unshift(oldArr.pop());
//     }
//     return newArr;
// }

var bubble = function(arr){
    var newArr = [...arr];
    var swapped = true;

    while(swapped){
        swapped = false;
        for(var i = 0; i < newArr.length; i++){
            if(newArr[i] > newArr[i+1]){
                var temp = newArr[i];
                newArr[i] = newArr[i+1];
                newArr[i+1] = temp;
                swapped = true;
            }
        }
    }

    return newArr;
}

console.log(bubble([1,6,2,4,3,8,9]))
console.log(bubble([3,2,1]))