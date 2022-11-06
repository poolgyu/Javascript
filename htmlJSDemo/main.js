import { hello } from "./js/module1.js";
import { add, evenOrOdd, sub } from "./js/module2.js";

hello("What the hell is going on?");

let result = add(10, 20);
console.log(result);
let subResult = sub(30, 10);
console.log(subResult);
// for default no need of {} and you can uase any name
// if we have only export then use {} ===> can hold a function / value.

// in case of default we can use any name while importing it.

// mod : hello function and num variable
// mod.num
// mod.hello()

// npm init: it will generate the package.json file which is an entry point for our node js project
//it will have all the details regarding your library which will be using in the project
// npm: node package manager: env for node
// init: it will help us to create the nodejs based project structure
// json: javasrcipt object notation --> will hold the details in terms of the keys and value

//
let resultEvenOrOdd = evenOrOdd(22);
console.log(resultEvenOrOdd);
