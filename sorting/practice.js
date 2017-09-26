// // function bubble(arr){
// //     var swapped = true;
// //     while(swapped){
// //         swapped = false;
// //         for(var i = 0; i < arr.length; i++){
// //             if(arr[i] > arr[i + 1]){
// //                 swapped = true;
// //                 var temp = arr[i];
// //                 arr[i] = arr[i + 1];
// //                 arr[i + 1] = temp;
// //             }
// //         }

// //     }
// //     return arr;
// // }
// // console.log("Bubble: "+ bubble([2,1,4,3,6,5,8,7,0,9]));

// // //////////////////////////

// // function insertion(arr){
// //     for(var i = 1; i < arr.length; i++){
// //         var element = arr[i];
// //         var j = i;
// //         while(j > 0 && (arr[j - 1] > element)){
// //             arr[j] = arr[j - 1];
// //             j--;
// //         }
// //         arr[j] = element;
// //     }
// //     return arr;
// // }
// // console.log("Insertion: "+ insertion([2,1,4,3,6,5,8,7,0,9]));

// // //////////////////////////

// // function mergeSort(arr){
// //     if(arr.length <= 1) return arr;
// //     var leftHalf = arr.slice(0, arr.length / 2);
// //     var rightHalf = arr.slice(arr.length / 2);
// //     var leftSorted = mergeSort(leftHalf);
// //     var rightSorted = mergeSort(rightHalf);
// //     return merge(leftSorted, rightSorted);
// // }
// // function merge(left, right){
// //     var solution = [];
// //     var iLeft = 0, iRight = 0;
// //     while(left.length + right.length > solution.length){
// //         if(iLeft === left.length) solution = solution.concat(right.slice(iRight));
// //         else if(iRight === right.length) solution = solution.concat(left.slice(iLeft));
// //         else if(left[iLeft] > right[iRight]) solution.push(right[iRight++]);
// //         else solution.push(left[iLeft++]);
// //     }
// //     return solution;
// // }
// // console.log("Merge: "+ mergeSort([2,1,4,3,6,5,8,7,0,9]));

// // //////////////////////////

// // function quickSort(arr, lo, hi){
// //     if(lo === undefined) lo = 0;
// //     if(hi === undefined) hi = arr.length - 1;
// //     if(lo < hi){
// //         var p = partition(arr, lo,  hi);
// //         quickSort(arr, lo, p - 1);
// //         quickSort(arr, p + 1, hi);
// //     }
// //     if(hi - lo === arr.length -1) return arr;
// // }
// // function partition(arr, lo, hi){
// //     var pivot = arr[hi];
// //     var pivotLoc = lo;
// //     for(var i = lo; i < hi; i++){
// //         if(arr[i] <= pivot){
// //             swap(arr, pivotLoc, i);
// //             pivotLoc++;
// //         }
// //     }
// //     swap(arr, pivotLoc, hi);
// //     return pivotLoc;
// // }
// // function swap(arr, i1, i2){
// //     if(i1 === i2) return;
// //     var temp = arr[i1];
// //     arr[i1] = arr[i2];
// //     arr[i2] = temp;
// //     return;
// // }
// // console.log("Quick: "+ quickSort([2,1,4,3,6,5,8,7,0,9]));

// // function minRotate(inscription) {
// //     var arr = inscription.split(''); 
// //     var count = 0;
// //     var swapped = true;
// //     while(swapped){
// //         swapped = false;
// //         for(var i = 0; i < arr.length-1; i++){
// //             if(arr[i].charCodeAt(0) > arr[i+1].charCodeAt(0)){
// //                 swapped = true;
// //                 var popped = arr.shift();
// //                 arr.push(popped);
// //                 count++;
// //                 break;
// //             }
// //         }
// //     }
// //     return count;
// // }

// // console.log(minRotate('baabccd'));


// function getMaxOccurrences(s, minLength, maxLength, maxUnique) {
//     var arr = [];
//     var max = 0;
//     for(var j = minLength; j <= maxLength; j++){
//         for(var i = 0; i < s.length; i++){
//             if(!arr.includes(s.substring(i, j))){
//                 arr.push(s.substring(i, j));
//             } 
//         }
//     }
// console.log(arr);
//     for(var i=0; i < arr.length; i++){
//         if(max < s.match(arr[i])[0].length) {
//             max = s.match(arr[i])[0].length;
//         }
//     }
    
//     return max
// }

// console.log(getMaxOccurrences('abcde', 2, 4, 26))


// /*
//  * Complete the function below.
//  */
// function cavityMap(arr) {
//     var n = arr.length;
//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < arr.length; j++){
//             var cell = arr[i][j];
//             //checking if it's not a wall
//             if(i !== 0 && i !== n-1 && j !==0 && j !== n-1){
//                 if(arr[i-1][j] < cell){
//                     if(arr[i+1][j] < cell){
//                         if(arr[i][j-1] < cell){
//                             if(arr[i][j+1] < cell){
//                                 arr[i][j] = 'X';
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return arr;
// }

// 1112
// 1912
// 1982
// 1234

// 1112
// 1x12
// 18x2
// 1234

function bubble(arr){
    var swapped = true;
    while(swapped){
        swapped = false;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                swapped = true;
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

function selection(arr){
    var solution = []; //2,1,4,3,6,5,8,7,0,9
    
    while(arr.length > 0){
        var max = 0;
        var maxLoc = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] >= max){
                max = arr[i];
                maxLoc = i;
            }
        }
        solution.unshift(arr[maxLoc]);
        arr.splice(maxLoc, 1);
    }
    return solution;
}

function insertion(arr){
    for(var i = 1; i < arr.length; i++){
        var element = arr[i];
        var j = i;
        while(j > 0 && (arr[j - 1] > element)){
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = element;
    }
    return arr;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    var leftHalf = arr.slice(0, arr.length / 2);
    var rightHalf = arr.slice(arr.length / 2);
    var leftSorted = mergeSort(leftHalf);
    var rightSorted = mergeSort(rightHalf);
    return merge(leftSorted, rightSorted);
}
function merge(left, right){
    var solution = [], iLeft = 0, iRight = 0;
    while(left.length + right.length > solution.length){
        if(iLeft === left.length){
            solution = solution.concat(right.slice(iRight));
        } else if(iRight === right.length){
            solution = solution.concat(left.slice(iLeft));
        } else if(left[iLeft] > right[iRight]){
            solution.push(right[iRight++]);
        } else {
            solution.push(left[iLeft++]);
        }
    }
    return solution;
}

function quickSort(arr, lo, hi){
    if(lo === undefined) lo = 0;
    if(hi === undefined) hi = arr.length - 1;
    if(lo < hi){
        var p = partition(arr, lo, hi);
        quickSort(arr, lo, p - 1);
        quickSort(arr, p + 1, hi);
    }
    if(hi - lo === arr.length -1) return arr;
}
function partition(arr, lo, hi){
    var pivot = arr[hi];
    var pivotLoc = lo;
    for(var i = lo; i < hi; i++){
        if(arr[i] <= pivot){
            swap(arr, pivotLoc, i);
            pivotLoc++;
        }
    }
    swap(arr, pivotLoc, hi);
    return pivotLoc;
}
function swap(arr, i1, i2){
    if(i1 === i2) return arr;
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}


console.log("Bubble: \t"+ bubble([2,1,4,3,6,5,8,7,0,9]));
console.log("Selection: \t"+ selection([2,1,4,3,6,5,8,7,0,9]));
console.log("Insertion: \t"+ insertion([2,1,4,3,6,5,8,7,0,9]));
console.log("Merge: \t\t"+ mergeSort([2,1,4,3,6,5,8,7,0,9]));
console.log("Quick: \t\t"+ quickSort([2,1,4,3,6,5,8,7,0,9]));