"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/////////////////////////////////////////
//Rest pattern and Parameters
//1)Destructuring
//When used to the right side of = opertor than it's basically the spread operator
// Spread->Unpacks the given arrays
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST is on  the left side of equal to operator
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, others);

const [p, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
//spread operator does not includes the missed values like in this case 'Pizza'
console.log(p, risotto, otherFood);

// Let's play with Objects also
const { sat, ...boringdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2)functions
// we can give any number values to it and every time it will work totally amazing
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //this is unpacking the values from array and then sending to the add function.

restaurant.orderPizza("cheese", "onion", "olives", "white sauce", "chicken");

////////////////////////////////////////////////////////////
///Short Ciurcuting in JS

// till now we used logical operartors only for returing boolean values
console.log(0 || 1);
//but let's use for their full potential
console.log(3 || "jatin");
//so that means that the results of the OR operator doesn't always have to be a Boolean.
//So there are three properties about logical operators
//i.they can use any data type.
//ii.They can return any data type
//iii.and they do something called short circuiting or as we also call it short circuit evaluation.

//so in the above case we fave values which are not boolean and || operatorn returned the non boolean value now what is short cuircuting in || operator
//In case og OR operator short circuiting means that if the first value is a truthy value,it will immediately return that first value
//OR operator returs out first truthy values
console.log(true || 0); //true
console.log("" || "jatin"); //jatin
console.log(undefined || null); //null

console.log(undefined || 0 || "" || "Hello" || 23 || null);
//here we are checking that if numGuests property exist then return than else give it a value of 10
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// // easy way to do the above task
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

console.log("---- AND ----");
//now AND operator is just opposite of OR it return the first falsy value and if not any then returns the last value.
console.log(0 && "Jonas"); //0
console.log(7 && "Jonas"); //jonas

console.log("Hello" && 23 && null && "jonas"); //null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
//above code can also be written as :-
//if orderPizza property existts then it will execute the next function otherwise not.
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

/////////////////////////////////////////////
///Nullish Coalescing Operator
//when we are doing the below task using || short circuting it is showing some not expected values
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
//so what we want is when guest is not defined than it should not return 10; so to handle that situation we have Nullish coalescing operator which totally looks a like of OR operator

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
//So why does this work?
// Well, it is because the nullish coalescing operator
// works with the idea or with the concept
// of nullish values instead of falsy values.
// And nullish values are null
// and undefined. so for this operator zero is not a falsy value so it returns teh first truthy value.
