// array is collection of similar type content.
// 10,20,30,40,50,60,70,80,90,100
var a = [10, 2, 351, -42, -53];

//array position reference will start at 0.
// the last index : size-1

for (const i of a) {
  console.log(i);
}
// let is used to declare the variable
// var and let and const diff.

for (let i = 0; i < a.length; i++) {
  let element = a[i];

  if (element % 2 == 0) {
    console.log(element);
  }
}


