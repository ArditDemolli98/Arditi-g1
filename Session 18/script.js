// Arrays

const car1 = 'BMW';
const car2 = 'Audi';
const car3 = 'Mercedes';
const car4 = 'Volkswagen';

const cars = ['BMW', 'Audi', 'Mercedes', 'Volkswagen'];

console.log(cars);
console.log(cars[2], cars[3]);

// Adding a new element

cars.push('Tesla');
console.log(cars);

cars.unshift('Toyota');
console.log(cars);

cars[3] = 'Range Rover';
console.log(cars);

// Removing an element
// Removing last element
cars.pop();
console.log(cars);

// Removing first element
cars.shift();
console.log(cars);

cars.push('Toyota', 'Citroen', 'Mazda');

console.log(cars);
console.log(cars[cars.length - 1]);


if (cars.includes('Lamborghini')) {
    console.log('Good for you');
} else {
    console.log('Even better');
}

console.log(cars.indexOf('Range Rover'));
const rangeRoverIndex = cars.indexOf('Range Rover');

cars[rangeRoverIndex] = 'Mercedes';

console.log(cars);

// Objects

const ardit = [
    'Ardit',
    'Demolli',
    24,
    'Programmer',
    'Prishtine',
    ['America', 'Italy', 'Germany', 'France'],
    true
];


const arditObject = {
    firstName: 'Ardit',
    lastName: 'Demolli',
    age: 24,
    job: 'Programmer',
    location: 'Prishtine',
    visitedCountries: ['America', 'Italy', 'Germany', 'France'],
    driversLicense: true
}

console.log(arditObject.location);

console.log('Ardit Demolli a 24 years old Programmer has visited 4 countries');


console.log(`${arditObject.firstName} ${arditObject.lastName} a ${arditObject.age} years old ${arditObject.job} has visited ${arditObject.visitedCountries.length} countries`);

const coffeeMachine = {
    brand: 'Gaggia',
    model: 'Classic Pro',
    color: 'white',

    about: function () {
        console.log(`I am a ${this.color} ${this.model} ${this.brand}`);
    },

    makeEspresso: function (size) {
        if (size === 's' || size === 'S') {
            return `Short espresso`
        } else if (size === 'm' || size === 'M') {
            return `Medium espresso`
        } else if (size === 'l' || size === 'L') {
            return `Large espresso`
        } else if (size === 'd' || size === 'D') {
            return `Double espresso`;
        } else {
            return 'Invalid size given';
        }
    }
}

const shortEspresso = coffeeMachine.makeEspresso('s');

console.log(shortEspresso);

coffeeMachine.about();

console.log(coffeeMachine);

// Loops
for (let i = 1; i < 11; i++) {
    console.log(`Multiplication by ${i}`);
    for (let e = 1; e < 11; e++) {
        console.log(`${i} * ${e} = ${i * e}`);
    }
}

let i = 1;
while (i < 10) {
    console.log("Day" + i);
    i += 2;
}
