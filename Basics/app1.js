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

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1400,
  neighbours: ["Bhutan", "Nepal", "Bangladesh"],
};

/*==============================================
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation
=========================================*/
