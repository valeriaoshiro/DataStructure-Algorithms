/* 
Write an algorithm called sumDigits that takes a 
non-negative integer as input and returns the sum of 
the integers. Do this exercise recursively. 
*/

var sumDigits = function(num, sum){
    if(num === 0) return sum;
    sum += num % 10;
    newNum = Math.floor(num/10);
    return sumDigits(newNum, sum)
}


console.log(sumDigits(1234, 0))

/* 
function sumDiits(n){
    if(n===0) return n;
    return n%10 + sumDigits(Math.floor(n/10))
}