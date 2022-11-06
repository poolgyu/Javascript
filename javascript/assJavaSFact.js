// you have to declare 2 arrays : 1st array hold the numbers and 2nd array hold the factorials .
// [1,2,3,4,5] 2nd expected : [1,2,6,24,120]

let arrOne = [1,2,3,4,5];
let arrTwo = [];
let fact = 1;
let temp = fact;
let sum = 0;

for (let i = 0; i < arrOne.length; i++) {
    
    for (let j = 1; j <= arrOne[i]; j++) {
        
        
        fact = fact * j;
        
        sum += temp;

        arrTwo.push(sum);
        
    }

    
    
    sum = 0;
}

for (let index = 0; index < arrTwo.length; index++) {
    document.writeln(arrTwo[index]);
    
}