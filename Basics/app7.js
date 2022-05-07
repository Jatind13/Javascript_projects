"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//we can do so many things with object literals after the ES6
//examples are below:
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

  // ES6 enhanced object literals the openingHours is initialised outside this object still we can us it her just by writing the name
  openingHours,

  //while writing methods we don't even need to wtite th 'function' keyword.
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
/////////////////////////////////////////////////////
////////////forOfLoop inJS
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) console.log(item);

// console.log(menu.entries());  here Array iterators are used which we will learn later on.
for (const i of menu.entries()) console.log(i);

for (const [i, el] of menu.entries()) console.log(`${i}:${el}`);

/////////////////////////////////////////////////////////////
//////Optional chaining
//Task: we have to check if there exist property openingHours in our resturant object and if it exists then check for mon property inisde the opening Hours

// console.log(restaurant.openingHours.mon);
//this is undefined becoz no such property exists.
//so if we do

// console.log(restaurant.openingHours.mon.open);

//it will produe error becoz the whole thing before open is undefined and undefined.open =error

//so to handle this situation optional chaining comes for saving us which is like this
console.log(restaurant.openingHours?.mon?.open);
//so above we are cheching if there exixts opening hour then only check for monday and if monday exists then only check for open ,now it will return undefined as soon as it gets to mon and will short circuit the situation and return undefined but not error.

//let's do optional chaining in arrays
// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
//in the above line we are seeing nullish coalscing and optional chaining working together and they are also released together .

//we can also perform optional chaining with methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
//checks if order method exists in restaurant object and if true then pass the value otherwise nullis opertor will execute the next line or operand
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");
//here orderRisotto doen't exists so it will retun the second operand.

//////////////////////
// Arrays
const users = [{ name: "Jatin", email: "hello@jatin.io" }];

console.log(users[0]?.name ?? "User array empty");

//if we dont have optional chaining then we woild do it like this which is alot of code.
if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

////////Detect Device type
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

///////
console.log(detectDeviceType()); // 'Mobile' or 'Desktop'
