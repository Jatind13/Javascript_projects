"use strict";

/*
============================================================
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console
==============================================================
*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const countryData1 = describeCountry("India", 150, "Delhi");
console.log(countryData1);
const countryData2 = describeCountry("China", 170, "Shanghai");
console.log(countryData2);
const countryData3 = describeCountry("USA", 8, "America");
console.log(countryData3);

/*
==============================================================
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations
==============================================================
*/

function percentageOfWorld1(population) {
  let percentage = population / 7900;
  percentage *= 100;
  return percentage;
}

// function Expresssion
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percent1 = percentageOfWorld1(1500);
const percent2 = percentageOfWorld1(500);
const percent3 = percentageOfWorld1(600);

const percent21 = percentageOfWorld2(1600);
const percent22 = percentageOfWorld2(700);
const percent23 = percentageOfWorld2(400);

console.log(percent1, percent2, percent3);
console.log(percent21, percent22, percent23);

/*
========================================================
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3
========================================================
*/

const percentageOfWorld3 = (population) => (population / 7900) * 100; //just remove function keyword and instead of curly braces use => arrow✌️.

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUSA3);
/*
========================================================
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choic
===========================================================
*/

const describePopulation = (country, population) =>
  `${country} has ${population} million people which is about  ${percentageOfWorld3(
    population
  )}% of the world`;

console.log(describePopulation("India", 1400));

/*
=========================================================
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values
=========================================================
*/

let populations = [1500, 1411, 500, 700];
console.log(populations.length >= 4);

let percentage = [];
for (let i = 0; i < populations.length; i++) {
  percentage.push(percentageOfWorld3(populations[i]));
}

console.log(percentage);

/*
============================================================
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your 
choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from 
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the 
index of the country in the 'neighbours' array, and then use that index to 
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'
=============================================================
*/
const neighbours = ["Norway", "Sweden", "Russia"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
neighbours[neighbours.indexOf("Sweden")] = "Republic of  Sweden";
console.log(neighbours);

/*
====================================
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing 
properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments
    ================================================
*/

// const myCountry = {
//   country: "India",
//   capital: "Delhi",
//   language: "Hindi",
//   population: 1400,
//   neighbours: ["Bhutan", "Nepal", "Bangladesh"],
// };

/*==============================================
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation
=========================================*/
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

/*=========================================
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property.
=============================================
*/
const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1400,
  neighbours: ["Bhutan", "Nepal", "Bangladesh"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million 
    ${this.language}-speaking people, 
    ${this.neighbours.length} neighbouring countries and a 
    capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};

console.log(myCountry.describe());

/*=============================================
LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, by logging a string like this to 
the console (for numbers 1 to 50): 'Voter number 1 is currently voting
=============================================
 */

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is voting`);
}

/*=========================================
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
=========================================
 */

const population = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < population.length; i++) {
  const perc = percentageOfWorld1(population[i]);
  percentages2.push(perc);
}
console.log(percentages2);

/*=============================================LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire 
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
worry if it's too difficult for you! But you can still try to figure this out anyway 
============================================== */

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour:${listOfNeighbours[i][j]}`);
  }
}

// looping backwards

const percentages3 = [];
let i = 0;
while (i < population.length) {
  const perc = percentageOfWorld1(population[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
/*Sorts an array of numbers, using the bucket sort algorithm.

Use Math.min(), Math.max() and the spread operator (...) to find the minimum and maximum values of the given array.
Use Array.from() and Math.floor() to create the appropriate number of buckets (empty arrays).
Use Array.prototype.forEach() to populate each bucket with the appropriate elements from the array.
Use Array.prototype.reduce(), the spread operator (...) and Array.prototype.sort() to sort each bucket and append it to the result. */
const bucketSort = (arr, size = 5) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  );
  arr.forEach((val) => {
    buckets[Math.floor((val - min) / size)].push(val);
  });
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};

bucketSort([6, 3, 4, 1]); // [1, 3, 4, 6]
