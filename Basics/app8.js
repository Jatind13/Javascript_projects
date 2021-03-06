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

/*Smoothly scrolls the element on which it's called into the visible area of the browser window.

Use Element.scrollIntoView() to scroll the element.
Use { behavior: 'smooth' } to scroll smoothly. */
const smoothScroll = (element) =>
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
smoothScroll("#fooBar"); // scrolls smoothly to the element with the id fooBar
smoothScroll(".fooBar");
// scrolls smoothly to the first element with a class of fooBar
/*Randomizes the order of the values of an array, returning a new array.

Use the Fisher-Yates algorithm to reorder the elements of the array. */
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]

//Detect language
const detectLanguage = (defaultLang = "en-US") =>
  navigator.language ||
  (Array.isArray(navigator.languages) && navigator.languages[0]) ||
  defaultLang;

console.log(detectLanguage()); // 'nl-NL')

/*Converts an angle from degrees to radians.

Use Math.PI and the degree to radian formula to convert the angle from degrees to radians.*/

const degreesToRads = (deg) => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708

/*Creates an array with the non-unique values filtered out.

Use the Set constructor and the spread operator (...) to create an array of the unique values in arr.
Use Array.prototype.filter() to create an array containing only the unique values. */

const filterNonUnique = (arr) =>
  [...new Set(arr)].filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]

/*Gets the Unix timestamp from a Date object.

Use Date.prototype.getTime() to get the timestamp in milliseconds and divide by 1000 to get the timestamp in seconds.
Use Math.floor() to appropriately round the resulting timestamp to an integer.
Omit the argument, date, to use the current date. */

const getTimestamp = (date = new Date()) => Math.floor(date.getTime() / 1000);

getTimestamp(); // 1602162242
