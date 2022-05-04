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

////////////////////////////////////////////
//Spread Operator//////////////////

const arr = [10, 11, 12];
const newArr = [1, 2, 3, 4, 5, ...arr];
console.log(newArr);
//writing array values individualy
console.log(...newArr);
//let's add some moew food to our resturatns menu
const newMenu = [...restaurant.mainMenu, "Burger"];
console.log(newMenu);
// Shallow copy of array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);

// Join 2 arrays
const myMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(myMenu);

// Spread Operator works on all iterables
//Iterables->In built javascript data structures like maps,sets,strings etc but objects are not iterables.
// Since Strings are iterables let's use spread operator on Strings to divide ths strings letters individually
const str = "Jatin";
const letters = [...str, " ", "D."];
console.log(letters);
console.log(...str);
//spread operator do not work with template literals
//console.log(`${...str}Dixit`); error:expected expression
// Real life example
const ingredients = [
  //  prompt("Let's make pasta ! Ingredient 1?"),
  //   prompt("Ingriedent2"),
  //   prompt("Ingridient3"),
];
//before ES6 -
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//after ES6-
restaurant.orderPasta(...ingredients);

// After 2018 ES6 update we can also use spread operator on Objects
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Jatin Dixit",
};
console.log(newRestaurant);

// copy of objects
const restaurantCopy = { ...restaurant };
//now let's change some properties inside copied restaurant
restaurantCopy.name = "HighRise Hotel";
console.log(restaurant.name); //since it is a shalow copy that's why the original object is not manipulated
console.log(restaurantCopy.name);
