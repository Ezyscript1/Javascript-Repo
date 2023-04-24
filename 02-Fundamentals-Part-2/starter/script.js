"use strict";

// functions
// function logger() {
//   console.log("My name is Ezy");
// }

// // calling the function
// logger();

// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);
// // const appleOrange = fruitProcessor(2, 4);
// // console.log(appleOrange);

// // // function declarations ways

// // function calcAge1(birthAge) {
// //   const age = 2023 - birthAge;
// //   return age;
// // }

// // const myAge = calcAge1(2004);
// // console.log(myAge);

// // const calcMyAge = function (birthAge) {
// //   return 2022 - birthAge;
// // };
// // console.log(calcMyAge(2004));

// // arrow function

// // const CalcAge3 = (birthAge) => 2023 - birthAge;
// // const age3 = CalcAge3(2004);

// // console.log(age3);
// // const yearsUntilRetirement = (birthAge, first_name) => {
// //   const age = 2023 - birthAge;
// //   const retirement = 65 - age;
// //   return retirement < 0
// //     ? "you Are long due to retire"
// //     : `you have ${retirement} years to retire ${first_name}`;
// // };

// // console.log(yearsUntilRetirement(2004, "Ezy"));

// // const cutPieces = (fruit) => fruit * 4;

// // function fruitProcessor(apples, oranges) {
// //   //   console.log(apples, oranges);
// //   const applePieces = cutPieces(apples);
// //   const orangePieces = cutPieces(oranges);
// //   const juice = `juice with ${applePieces} peice of apples and ${orangePieces} pieces of oranges`;
// //   return juice;
// // }

// // const yourJuice = fruitProcessor(4, 2);
// // console.log(yourJuice);

// // const calcAge = (year) => 2023 - year;

// // const yearsUntilRetirement = function (birthAge, first_name) {
// //   //   const age = 2023 - birthAge;

// //   const age = calcAge(birthAge);
// //   const retirement = 65 - age;

// //   if (retirement > 0) {
// //     console.log(`you have ${retirement} years to retire ${first_name}`); //It wont return this line if it was down below the return this line dint work because the return keyword returns only the first line  after it
// //     return retirement;
// //   } else {
// //     console.log("you Are long due to retire");
// //     return -1;
// //   }
// //   //   return retirement < 0
// //   //     ? "you Are long due to retire"
// //   //     : `you have ${retirement} years to retire ${first_name}`;
// // };

// // console.log(yearsUntilRetirement(1204, "Ezy"));

// // Arrays

// const friends = ["Zeed", "Bolu", "kenny"];

// // const years = new Array(2000, 2001, 2002, 2004, 2006);
// // console.log(years);

// // friends[2] = "David";
// // console.log(friends);

// // const ezy = ["jonas", 18, "dev", "teacher", friends];
// // console.log(ezy);

// // const calcAge = (year) => 2023 - year;

// // console.log(calcAge(years[3]));

// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // const age3 = calcAge(years[2]);
// // const age4 = calcAge(years[years.length - 1]);

// // const ages = [age1, age2, age3, age4];
// // console.log(ages);

// // // array metthod

// // // ADDING ELEMENTS
// // const newLenght = friends.push("Daniel");
// // console.log(friends.length);
// // console.log(friends);
// // console.log(newLenght);

// // friends.unshift("Me");
// // console.log(friends);

// // // REMOVING ELEMENTS
// // friends.pop();
// // const poped = friends.pop();
// // console.log(poped);

// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);

// // //  TO CHECK IF ARRAY IS PRSENT

// // // using indexOf
// // console.log(friends.indexOf("Zeed"));

// // // using includes

// // console.log(friends.includes("me"));

// // // the includes method can be used in conditionals

// // friends.includes("Zeed")
// //   ? console.log("You have a very good friend")
// //   : console.log("move with Good people");

// // const wagmi = ["me", "Zeed", "Bolu", "Kenny", "Muyiwa"];
// // console.log(wagmi);
// // // if i want to change the kenny to another person

// // wagmi[3] = "Yab";
// // console.log(wagmi);

// // wagmi.shift();
// // console.log(wagmi);

// // arrays

// const ezy_ = {
//   firstName: "Ezyscript",
//   lastName: "Adegoke",
//   birthyear: 2004,
//   job: "dev",
//   friends: friends,
//   hasDriversLicense: false,

//   //   calcAge: (birthyear) => {
//   //     let ret = 2023 - birthyear;
//   //     return ret;
//   //   },

//   //   calcAge: function () {
//   //     // console.log(this);
//   //     return 2023 - this.birthyear;
//   //   },
//   // calcAge: function () {
//   //   this.age = 2023 - this.birthyear;
//   //   return this.age;
//   // },
//   calcAge: function () {
//     this.age = 2023 - this.birthyear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.age} years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
//   },
// };

// // console.log(ezy_["calcAge"](ezy_["birthyear"]));

// // console.log(ezy_["calcAge"]());
// console.log(ezy_.calcAge());
// console.log(ezy_["age"]);

// console.log(ezy_["getSummary"]());
// // how to retreive data from object

// // the dot format
// // it is the object that strictly rely on the property name
// // cannot accept computed data
// // you wouldget undefined if you try and retrive a property that is is not exactly named in the object
// console.log(ezy_.age);

// // The bracket notation
// // the can recive computed value
// // like value from promt sctored in a variable with different names from the names in the properties

// console.log(ezy_["age"]);

// const nameKey = "Name";
// console.log(ezy_["first" + nameKey]);
// console.log(ezy_["last" + nameKey]);
// //  the can onlu be done using the [notation]

// // const intrestedIn = prompt(
// //   "What do you wantto know about Ezy between his name, age , job, friends"
// // );

// // console.log(intrestedIn);

// // if (ezy_[intrestedIn]) {
// //   console.log(ezy_[intrestedIn]);
// // } else console.log("wrong request");

// // ezy_.courseMates = ["boluGirl", "Mercy", "Daniel"];
// // ezy_.otherPlans = "become a striper if tech no pay";
// // ezy_.otherCareers = ["web3 dev", "cyber security Expert", "Datascience"];
// // ezy_["spec"] = "Choose not to say";
// // console.log(ezy_);

// // const ezyStory = `${ezy_["first" + nameKey]} has ${
// //   ezy_["friends"].length
// // } friends and his best friend is called ${ezy_["friends"][0]}`;
// // console.log(ezyStory);

// // we could have used ezy.friens.lenght to get  the lenght
// // we could have used ezy.friends[0]

// looping
// for (let i = 1; i <= 5; i++) {
//   console.log(`we rise by lifting others ${i}`);
// }
// // best apllication of loops is looping through array
// const types = [];
// const ezyArray = [
//   "Israel",
//   "Adegoke",
//   2023 - 2004,
//   "Dev",
//   ["Zeed", "Bolu", "Yab"],
// ];

// for (let i = 0; i < ezyArray.length; i++) {
//   console.log(ezyArray[i], typeof ezyArray[i]);

//   // types[i] = ezyArray[i];
//   // console.log(types);
//   types.push(typeof ezyArray[i]);
// }
// console.log(types);

// // its best you declare / initialize all variables needed in a loop
// const ages = [];
// const years = [2004, 2001, 2002, 2008, 2010];
// for (let i = 0; i < years.length; i++) {
//   ages[i] = 2023 - years[i];
// }
// console.log(ages);

// // continue and break statement
// // CONTINUE KEYWORD IS USED TO SKIP A PARTICULAR CONDITION

// // WHILE BREAK KEYWORD STOPS THE LOOPS IMMEDIATELY AFTER A PARTICULAR CONDITION

// for (let i = 0; i < ezyArray.length; i++) {
//   // in this if statement theres no need for wrting into a curly braces
//   if (typeof ezyArray[i] !== "string") continue;
//   console.log(ezyArray[i]);
// }

// for (let i = 0; i < ezyArray.length; i++) {
//   if (typeof ezyArray[i] === "number") break;
//   console.log(ezyArray[i]);
// }

// for (let i = ezyArray.length - 1; i >= 0; i--) {
//   console.log(ezyArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`______lifting weight ${rep}`);
//   }
//   console.log(
//     `exercise ${exercise}------we rise by lifting others ${exercise}`
//   );
// }

let rep = 0;
while (rep <= 10) {
  console.log(`WAGMI ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you just rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
