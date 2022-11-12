export default function hello3(msg) {
  console.log(msg);
}

// lambda function / expression
// arrow functions
export let add = (num1, num2) => num1 + num2;
export let sub = (num1, num2) => num1 - num2;

export let evenOrOdd = (num) => {
  if (typeof num == "number") {
    // string, number, boolean, object, function

    if (num % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }
};

// you have to declare 2 arrays : 1st array hold the numbers and 2nd array hold the factorials .
// [1,2,3,4,5] 2nd expected : [1,2,6,24,120]

// declare an array with 10 numbers and find out palindrome numbers in the array.
// declare an array with 10 numbers and find out prime numbers in the array.
// declare an array with 10 numbers and find out strong numbers in the array.

// Creating factorial array:
export let factArray = (input) => {
  let array = [];
  let arrayTwo = [];
  let factorial = 1;
  let sum = 1;

  for (let i = 0; i < input; i++) {
    array.push(i + 1);
  }

  console.log(...array);

  for (let j = 1; j <= array.length; j++) {
    factorial = factorial * j;
    sum += factorial;
    arrayTwo.push(sum);
    console.log(sum);
    sum = 0;
  }

  console.log(...arrayTwo);
};

// Finding palindrome numbers in arrays:

export let arrNums = [4, 23, 121, 999, 55, 2, 18, 46, 456, 1001];
export let arrayNumIsPal = (array) => {
  
  var digit = 0;
  var reversal = 0;
  var temp = number;

  for (let i = 0; i < array.length; i++) {
    var number = array[i];
    console.log(number);

       while (number > 0) {
      
      digit = number % 10;

      reversal = reversal * 10 + digit;
      number = Math.floor(number / 10);

    }

    console.log(reversal);
    

    if (reversal == temp) {
      console.log(temp);
    } 
  }
};
// all those assignments you should transform to functions (arrow)
