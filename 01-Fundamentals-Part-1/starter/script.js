/*
let js = 'amazing';
console.log(40 + 7 + 1 - 6);

console.log('jonas');
console.log(23);

let firstName = "EzySripts";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let ezy_scripts = "ES"
let $function = 18;

let PI = 3.1415;

let myFirstJob = 'coder';
let myCurrentJob = 'CEO';

console.log(myFirstJob);

let javacriptIsFun = true;
console.log(javacriptIsFun);

let child;

// console.log(typeof true);
console.log(typeof javacriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Ezy');
// console.log(typeof child);


javacriptIsFun = 'yes!';
console.log(typeof javacriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2004;
console.log(typeof year);

console.log(typeof null)
*/

/*let age = 18;
age = 31;

const birthYear = 2004;
// birthYear = 2002;

var job = 'programmer';
job = 'teacher';*/

//math operators
/*const now = 2022
const ageEzy = now - 2004;
const ageMercy = now - 2005;
console.log(ageEzy, ageMercy);

console.log(ageEzy * 2, ageEzy / 10, 2 ** 3);

const firstName = 'Ezy';
const lastName = 'Scripts'
console.log(firstName + " " + lastName)

//assignment opperators
let x = 10 + 5;
x += 10 // x = x + 10 = 25
x *= 4 // x = x*4 = 25
x++;
x--;
x--;
console.log(x);

// comparison operators
console.log(ageEzy > ageMercy); // < > <= >=
console.log(ageMercy >= 18);

const isFullAge = ageMercy >= 18;

console.log(now - 2004 > now - 2005);*/

/*const now = 2022
const ageEzy = now - 2004;
const ageMercy = now - 2005;

console.log(now - 2004 > now - 2005);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

console.log(ageEzy, ageMercy);

const averageAge = (ageEzy + ageMercy) / 2

console.log(ageEzy, ageMercy, averageAge)*/
/*
const firstName = 'EzyScripts';
const job = 'Web dev';
const birthYear = '2004';
const currentYear = '2022'

const ezy = "i'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';

console.log(ezy);

const newEzy = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`

console.log(newEzy)

console.log(
    `a string with
    multiple
    lines`
);


const age = 10;

if (age >= 18) {
    console.log("you can now start driving school")
} else {
    const yearsLeft = 18 - age;
    console.log(`you'er too young to drive, you have ${yearsLeft} years left`);
}

const birthYear = 2002;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21
}

console.log(century)
// tpe conversiom
const inputYear = "2004";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Ezy"))
console.log(typeof NaN);

console.log(String(23), 23)

console.log(Boolean(inputYear));
// you can convert data types to each other like booleans strings and booleans


// type coercion

console.log('i am ' + 23 + ' years old');
console.log('23' - '10' + 3)
// this is because (-) sign triggers coersiom
console.log("23" + "13" + 3)
// this is beacause (+) signs cancatinate strings togethr and automatically converts teh numbers to fellow strings

console.log("23" / "2")
console.log('2' > '4');
console.log("23" * "2")
// this is because (-,*,/,><) sign triggers coercion

let n = '1' + 1;
n = n - 1;
console.log(n)*/

// 5 falsy values ; 0. "", undefined, NaN, null and false
/*let good;

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(good));
console.log(Boolean({}));
console.log(Boolean(Number("Ezy")));

const money = 100;
if (money) {
    console.log("dont spend it all")
} else {
    console.log('you should learn to code')
}

let height;
if (height) {
    console.log('hight is defined')
} else {
    console.log('height is undefined')
}*/

/*const age = 18;

if (age === 18) console.log("you just became an adult");


const favourite = Number(prompt("whats ur favourite number?"));
console.log(Number(favourite), favourite, typeof favourite)

if (favourite === 18) {
    console.log("18 is an amazing number")
} else if (favourite === 7) {
    console.log("number is 7")
} else if (favourite === 10) { }
else {
    console.log("number is not 18 or 7")
}

// if not = !==*/

// const hasDriversLicence = true // A
// const hasGoodVision = true // B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(!hasDriversLicence || hasGoodVision);
// console.log(hasDriversLicence && !hasGoodVision);

// // const shouldDrive = hasDriversLicence && hasGoodVision ;

// // if (shouldDrive) {
// //     console.log("sarah should drive")
// // } else {
// //     console.log("someone else should drive");
// // }

// const isTired = false // C

// console.log(hasDriversLicence && hasGoodVision && isTired);

// const shouldDrive = hasDriversLicence && hasGoodVision && !isTired;

// if (shouldDrive) {
//     console.log("sarah should drive")
// } else {
//     console.log("someone else should drive");
// }

// const day = 'sunday';

// switch (day) {
//     case 'monday':
//         console.log('i would go to classes');
//         break;
//     case 'tuesday':
//         console.log('i would learn coding a bit');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('practice what i have learnt');
//         break;
//     case 'friday':
//         console.log('code intensive');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('code like mad when youer back from Church');
//     break;
//     default:
//         console.log('Not a valid number')
// }
// const day = 'friday';
// if (day === "monday") {
//     console.log('i would go to classes');
// } else if (day === "tuesday") {
//     console.log('i would learn coding a bit');
// } else if (day === "wednesday" || day === "thursday") {
//     console.log('practice what i have learnt');
// } else if (day === "friday") {
//     console.log('code intensive');
// } else if (day === "saturday" || day === 'sunday') {
//     console.log('code like mad when youer back from Church');
// } else console.log('not a valid day')

const age = 19;
age >= 18 ? console.log('I like to drink wine') :
    console.log('i like drinking water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`)