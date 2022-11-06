// printing the numbers from 1 to 10
// 1. while: entry control
// 2. for: entry control
// 3. do while: exit control

var i = 1;
console.log("before loop");
while (i <= 10) {
    console.log(i);
    i++;
}
console.log("after loop");


var i = 1;
console.log("before loop");
do  {
    console.log(i);
    i++;
} while (i <= 10)
console.log("after loop");

for (let i = 1; i <= 10; i++) {
    console.log(i);
    }
    