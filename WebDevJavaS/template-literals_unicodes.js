"use strict";

var user = "John Mockery";
var designation = "Sr. Designer";
var organization = "Sentinel Design\u{2122}";
var city = "New York";
var country = "USA";
var location = city + ", " + country;
var favQuote = "To 'single-quote' or \"double-quote\"";

var employeeData = `Name: ${user}
Designation: ${designation}
Organisation: ${organization}
Location: ${location}`;

var greeting = `Hi, my name is ${user} \u{1F642} and I work as a ${designation} at ${organization}. Here's a simple equation: 2 + 2 = ${
  2 + 2
}`;

console.log(employeeData);
console.log(greeting);
