/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

// var fibonnaci = function(nth){
//     var first = 0;
//     var second = 1;
//     var answer = 0;
//     var count = 2;
//     if(nth === 0) return 0;
//     if(nth === 1) return 1;
//     while(nth >= count){
//         answer = first + second;
//         first = second;
//         second = answer;
//         count++;
//     }
//     return answer;
// }

// console.log(fibonnaci(6));

var fibonnaci = function(nth){
    if(nth === 0) return 0;
    if(nth === 1) return 1;
    return fibonnaci(nth - 1) + fibonnaci(nth - 2);
}

console.log(fibonnaci(3));
