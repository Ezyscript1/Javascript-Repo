// // Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const calcTempApt = (t1, t2) => {
//   let temps = [...t1, ...t2];

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max - min);
// };
// // calcTempApt([6, 19, 5, 20, 6, "err", 4, 2]);
const temp1 = [12, 45, 70, 20, 10];
const temp2 = [5, 28, 60, 22];

// calcTempApt(temp1, temp2);

// // whem  given two arrays
// // merge the arrays into one
// // ie array.concat

// // debugging

// const convertToKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celcius",
//     // value: Number(prompt("What is your value in degree celsius")),
//     value: 10,
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(convertToKelvin());

// using a debugger

const calcTempAptBug = (t1, t2) => {
  let temps = [...t1, ...t2];

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max - min);
};

console.log(calcTempAptBug(temp1, temp2));
