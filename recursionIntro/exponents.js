function exponent(base, expo){
    var count = 2; 
    var answer = base;
    if(expo === 0) return 1;
    if(expo === 1) return base;
    while(count <= expo ){
        answer *= base;
        count++;
    }
    return answer;
}

console.log("*** Exponent with while loop ***");
console.log(exponent(2, 8));

function recursiveExponent(base, expo){
    if(expo === 0) return 1;
    if(expo === 1) return base;
    return recursiveExponent(base, expo-1);
}

console.log("*** Exponent with recursion ***");
console.log(exponent(2, 8));