/*
Implement factorial.
factorial(5) => 5*4*3*2*1 => 120
*/

var factorial = function(num){
    if(num === 1){
        return 1;
    } 
    return factorial(num-1) * num;
}

console.log(factorial(6));