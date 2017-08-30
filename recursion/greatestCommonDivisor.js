/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

var greatestCommonDivisor = function(num1, num2){
    var maxNum1 = num1;
    var maxNum2 = num2;
    if(num1 === 1 && num2 === 1) return 1;
    if(num1%maxNum1 === 0 && num2%maxNum1 === 0) {
        console.log(maxNum1, maxNum2);
        if(num1%maxNum2 === 0 && num2%maxNum2 === 0) {
            return maxNum1;

        }
    } 
    return greatestCommonDivisor(maxNum1 - 1, maxNum2 - 1);
}

console.log(greatestCommonDivisor(8, 12));