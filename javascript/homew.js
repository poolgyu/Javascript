
// strong number:
// 145 : 1! + 4! +5!

let number = 145;
let sum = 0;
temp = number;

while (number) {                                              
    i = 1;
    fact = 1;

    digit = number % 10;

    for (i = 1; i <= digit; i++) {
        fact = fact * i;
    }

    sum = sum + fact;
    number = Math.floor(number/10);
}

if (temp == sum) {
    console.log("You have found a STRONG NUMBER!")
} else {
    console.log("This is NOT a STRONG NUMBER!")
}


