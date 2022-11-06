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

  // all those assignments you should transform to functions (arrow)
