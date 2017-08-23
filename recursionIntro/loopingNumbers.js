// looping through the numbers n down to 0. Use while loop
function looping(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}
console.log("*** Looping with while loop ***")
looping(3);

// looping through the numbers n down to 0. Use recursion
function loopingRecursion(n) {
    if(n === 0){
        console.log(n);
        return n;
    } else {
        console.log(n);
        return loopingRecursion(n-1);
    }
}

console.log("*** Looping with recursion ***")
loopingRecursion(3);