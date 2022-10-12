10 + 24 + 16

console.log("Ardit")
console.log(10 + 24 + 16)

let firstName = "Ardit";

console.log(firstName);

let calculation = 10 + 24 + 16;

console.log(calculation);
// Descriptive names for variables
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// Non-descriptive names for variables
let job1 = "Programmer";
let job2 = "Programmer";


// let first&lastName = "asd"; Single line comment


/* Multiple line comment
let _3years = "yes";
let $3years = 3;
*/

// Data types

// Number
20;
20.5;

// String
"Agnesa";
"Une i kam 20 vjet";
'20.5';

// Boolean
true;
false;

// Undefined
let age;

// Null
let lastName = null;
age = null;
lastName = "Demolli";

console.log(typeof null);

let something = "Just some random text";

something = "Common text";

something = true;
something = 10;
console.log(something);

// let, const, var

// By default
const city = "Prishtine";

// Whenever u need an undefined value, or you wanna change the value by the time 
let country;

// Don't use it
var team = "Barcelona";
team = "Sevilla";

const birthYear = 1998;

let myAge = 24;
myAge = 25;

// Basic operators
// Aritmetic operators

const arditAge = 24;
const currentYear = 2022;

const arditBirthYear = currentYear - arditAge;
console.log(arditBirthYear);

console.log(arditBirthYear + arditAge);
console.log(200 * 200);
console.log(200 / 200);
console.log(10 ** 3);
console.log(10 % 3);

// String concatination
const myFirstName = "Ardit";
const myLastName = "Demolli";
console.log("My name is " + myFirstName + " " + myLastName);

// Assignment operators
// = is used to assign a value
let firstNumber = 10;

firstNumber++;
firstNumber--;

//firstNumber = firstNumber + 2;
firstNumber += 2;
firstNumber -= 2;
firstNumber *= 2;
firstNumber /= 2;
firstNumber **= 2;
firstNumber %= 2;
console.log(firstNumber);

// Comparison operators
/*
> greater than
< smaller than
>= greater or equal than
<= smaller or equal than
=== strictly equal
== loosly equal
*/
console.log(20 >= 111);
console.log(200 === 200);

// If else statement
let weather = 'sunny';
weather = 'snowy';

if (weather == 'sunny') {
    console.log('Today is a sunny day');
} else if (weather == 'windy') {
    console.log('Today is a windy day');
} else if (weather == 'snowy') {
    console.log('Today is a snowy');
} else {
    console.log('Today is a rainy day');
}

if (condition) {
    // true code block
} else if (condition) {
    // else if code block
} else if (condition) {
    // another else if block
}
else {
    // false code block
}