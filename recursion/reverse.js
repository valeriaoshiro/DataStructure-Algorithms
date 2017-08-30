/*
Implement a function that will reverse a string recursively.
reverse('abcdefg')
=> 'gfedcba'
*/

var reverse = function(str){
    var newArr = str.split('');
    var answerArr = [];
    var recursion = function(newArr, answerArr, length){
        if(length === 0) return answerArr;
        var poped = newArr.pop(); 
        answerArr.push(poped);
        return recursion(newArr, answerArr, length - 1);
    }

    recursion(newArr, answerArr, newArr.length);
    return answerArr.join('');
}

console.log(reverse('abcdefg'));