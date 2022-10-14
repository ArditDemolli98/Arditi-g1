// Template literals

const firstName = "Ardit";
const birthYear = 1998;
const job = 'teacher';

const ardit = "I'm " + firstName + " a " +
    (2022 - birthYear) + " year old " + job;

console.log(ardit);

const ardit1 = `I'm ${firstName} a ${2022 - birthYear} year old ${job}`;

console.log(ardit1);

const randomString = `This is 
just a random 
string`;

console.log(randomString);

// Type conversion and coersion

const age = '24';
const currentYear = '2022';

console.log('ardit' - '24');

// Boolean type coersion
/* Falsy values:
0 
''
undefined
null
NaN
false
*/
console.log(Boolean(NaN));

let money = false;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("Go get a job");
}
// Equality operators == vs ===
const luckyNumber = '7';

if (Number(luckyNumber) === 7) {
    console.log("Congrats, you won!");
} else {
    console.log("Try again!");
}

// Logical operators
/*
&& - AND
|| - OR
! - NOT
*/

let budget = true;
let time = false;

if (budget && !time) {
    console.log("Enjoy your vacation!🌴");
} else {
    console.log("It's better if you stay home this time!");
}

// Exercise

// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;

console.log(avgDolphins, avgKoalas);
if (avgDolphins > avgKoalas && avgDolphins > 100) {
    console.log("Dolphins are the winners 🏆");
} else if (avgDolphins === avgKoalas && avgDolphins > 100) {
    console.log("There is a draw");
} else if (avgKoalas > avgDolphins && avgKoalas > 100) {
    console.log("Koalas are the winners 🏆");
}
else {
    console.log("There is no winner");
}

// Switch statement

const day = 'Sunday';

switch (day) {
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday');
        break;
    case 'Thursday':
        console.log('Today is Thursday');
        break;
    case 'Friday':
        console.log('Today is Friday');
        break;
    default:
        console.log("YAYYY it's weekend!");
}

// Ternary operator

const greaterThan = 23 > 10 ? "23 is greater than 10" : "False";

console.log(greaterThan);