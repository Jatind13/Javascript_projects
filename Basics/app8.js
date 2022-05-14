"use script";

// Date and Time injavascript
// JavaScript Date objects represent a single moment in time in a
// platform-independent format. Date objects contain a Number
// that represents milliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section
// new Date(date string)

// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);
// console.log(new Date());
// console.log(new Date().toLocaleString());
//10/5/2022, 6:07:00 pm
// console.log(new Date().toString());
//Tue May 10 2022 18:07:48 GMT+0530 (India Standard Time)

//-----------------------------------
// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time .the number
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC
// console.log(Date.now()); //1652186345451

//----------------------------------------
// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second,
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.
// January is 0. December is 11.
// var d = new Date(2021, 0); //atleast 2 parameters must be passed
// console.log(d.toLocaleString());
///----------------------------------------
// new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string
// var d1 = new Date("October 13, 2021 11:13:00");
// console.log(d1.toLocaleString());
//////////////////////////////////////
// new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:

//var d = new Date(0);
//var d = new Date(1652186707600);
// var d = new Date(1652186707600 * 2);
// console.log(d.toLocaleString());

///////////////////////////////////
//👉 Dates Method

// const curDate = new Date();

// // how to get the individual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());
//-------------------------------------------
// // how to set the indivisual date

// console.log(curDate.setFullYear(2022));
// // // The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022, 10, 5));
// let setmonth = curDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());

////////////Time Methods//////////////////////
// const curTime = new Date();

// how to get the indivisual Time

// console.log(curTime.getTime());
// // // The getTime() method returns the number of milliseconds
// // since January 1, 1970
// console.log(curTime.getHours());
// // // The getHours() method returns the hours of a date as a
// // number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());
//----------------------------------------
// // how to set the individual Time
// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));

//
// (function () {
//   setInterval(() => {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000);
// })();

const filterUnique = (arr) =>
  [...new Set(arr)].filter((i) => arr.indexOf(i) !== arr.lastIndexOf(i));
filterUnique([1, 2, 2, 3, 4, 4, 5]); // [2, 4]

//Creates an array with the unique values filtered out.

//this is how you reverse the string using spread operator
const reverseString = (str) => [...str].reverse().join("");
reverseString("foobar"); // 'raboof'

//Checks if the given argument is a number.

// Use typeof to check if a value is classified as a number primitive.
// To safeguard against NaN, check if val === val (as NaN has a typeof equal to number and is the only value not equal to itself).
const isNumber = (val) => typeof val === "number" && val === val;
isNumber(1); // true
isNumber("1"); // false
isNumber(NaN); // false
