// leap year calculator.
// 2020 2000


var year = 1700;

// apply check list of leap year on the provided year or not
// decision on year: whether it is a leap year or not

if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("Year is a leep year")
} else {
    console.log("Year is not a leap year.")
}
