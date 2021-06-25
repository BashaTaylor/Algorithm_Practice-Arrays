//Part 1
//Using the given array,print Values and Sum.
//Print each array value and the sum so far.

var testArr = [6,3,5,1,2,4];
var sum = 0;
for(var i = 0; i < testArr.length; i++){
    sum = sum +testArr[i];
    console.log(testArr[i]);
    console.log(sum);
}

//The expected output will be: 
//Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21


//Part 2
//Multiply each value in the array by its array position.

var testArr = [6,3,5,1,2,4];
var sum = (i);
for(var i = 0; i < testArr.length; i++){
    sum = (i) *= testArr[i];
    console.log(sum);
}

//The expected output will be:
//[0,3,10,3,8,20]
