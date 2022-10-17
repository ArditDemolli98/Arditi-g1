// Functions

function logger(value) {
    console.log(value);
}

console.log('Ardit');


function espressoMachine(size) {
    if (size === 's' || size === 'S') {
        return 'Short espresso';
    } else if (size === 'm' || size === 'M') {
        return 'Medium espresso';
    } else if (size === 'l' || size === 'L') {
        return 'Large espresso';
    } else if (size === 'd' || size === 'D') {
        return 'Double espresso';
    } else {
        return 'Espresso size does not exist';
    }
}

const shortEspresso = espressoMachine('s');
logger(shortEspresso);

logger(espressoMachine('d'));

logger(espressoMachine('ngjyst'));



/////////////////////////////////////////

console.log(findAge(2022, 1998));
console.log(findAge(2022, 2000));

// Function declaration
function findAge(currentYear, birthYear) {
    return currentYear - birthYear;
}

// Function expression
const findAge1 = function (currentYear, birthYear) {
    return currentYear - birthYear;
}

logger(findAge1(2022, 1989));

// Arrow functions
const findAge2 = (currentYear, birthYear) => currentYear - birthYear;

logger(findAge2(2022, 2004));

const espressoMachine2 = size => {
    if (size === 's' || size === 'S') {
        return 'Short espresso';
    } else if (size === 'm' || size === 'M') {
        return 'Medium espresso';
    } else if (size === 'l' || size === 'L') {
        return 'Large espresso';
    } else if (size === 'd' || size === 'D') {
        return 'Double espresso';
    } else {
        return 'Espresso size does not exist';
    }
}

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAvg = calcAverage(44, 23, 71);
const koalasAvg = calcAverage(65, 54, 49);
const dolphinsAvg1 = calcAverage(85, 54, 41);
const koalasAvg1 = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins are the winners with a score of ${avgDolphins} vs Koalas with a score of ${avgKoalas}`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas are the winners with a score of ${avgKoalas} vs Dolphins with a score of ${avgDolphins}`;
    } else {
        return 'There is no winner in this match!';
    }
}
console.log(checkWinner(dolphinsAvg, koalasAvg));
console.log(checkWinner(dolphinsAvg1, koalasAvg1));
