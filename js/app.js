// exercise 1
let firstName = "Oleksandr";
let lastName = "Semykin";
let fullName = `${firstName} ${lastName}`
console.log(fullName)

// exercise 2
let sideOne = 2;
let sideTwo = 4;
console.log(sideOne*sideTwo);

// exercise 3
console.log(Math.pow(10, 6))


// exercise 4
console.log(Math.floor(Math.random()*50))

// exercise 5
let number = 0;
if ( number < 0) {
    console.log("negative value")
} else {
    console.log("positive value")
}


// exercise 6
let text = "helpme";
    if (text.length > 1) {
        console.log(text.slice(-2, -1))
    }

// exercise 7
let month = 1;

switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("month not found!")

} 

// exercise 8
let password = "1312sda&";
if (password.length > 5 && password.indexOf("&") > 1) {
    console.log("this password is strong")
 }  else {
    console.log("this password is weak")
}

// exercise 9
let a = 4;
let b = 2;
if (typeof a == "number" && typeof b == "number") {
    console.log(a+b)
} else {
    console.log("Sum of those items can’t be counted")
}

// exercise 10
let textOne = "five";
let textTwo = "seven";
    if (typeof textOne == "string" && typeof textTwo == "string" && textOne.length == textTwo.length) {
        console.log("those items are strings and they’re equal")
    }
    else {
        console.log("items are not compareble")
    }
   