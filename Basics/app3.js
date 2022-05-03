// Destructuring in Javascript
//
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const workingHours = {
  thu: {
    wake: 5,
    sleep: 11,
  },
  fri: {
    wake: 6,
    sleep: 7,
  },
  sat: {
    wake: 9,
    sleep: 2,
  },
};
const me = {
  Myname: "Jatin",
  hobbies: ["Reading", "Coding", "Playing", "Writing"],
  colors: ["red", "green", "yellow", "black"],
  color: function (ind1, ind2) {
    return [this.colors[ind1], this.colors[ind2]];
  },
  works: function (obj) {
    console.log(obj);
  },
  // foodDelivery: function (object) {
  //   console.log(object);
  // },
  //here when we are destructuring the object then parameters order don't matter
  orderDelivery({ ind1, ind2, time, address }) {
    console.log(
      `Order received! ${this.hobbies[ind1]} and ${this.colors[ind2]} will be delivered to ${address} at ${time}`
    );
  },
};

me.orderDelivery({
  time: "10:30",
  address: "Garhi Road",
  ind1: 2,
  ind2: 3,
});
///////////////////////////////////////////////////////////
//Destructuring in Objects/////////////////////////////
const { hobbies, colors, Myname } = me;
console.log(hobbies, colors, Myname);

//we can change the property names also
const { hobbies: MyHobbies, colors: MyColors, Myname: fname } = me;
console.log(MyHobbies, MyColors, fname);

//we can also give default values to the varaiable which are not defined yet this helps us in case of API's
const {
  lname = [], //here lname is handled an will not give us undefined
  colors: MyColor = [], //colors will pick the value from object only because it is already declared
} = me;
console.log(lname, colors);
// Mutating or swapping of variables
let a = 111;
let b = 45;
const obj = { a: 23, b: 7, c: 17 };
// const {a,b}=obj;   not allowed
//let {a,b}=obj;  not allowed(Cannot redeclare block-scoped variable 'a'.ts(2451)
//Cannot redeclare block-scoped variable 'b'.)

// ---------for mutating see below-------------
({ a, b } = obj); //since JS sees curly braces as block of code so we have to handle bt capturing whole thing inside brackets.
console.log(a, b);
// ----------------Nested Objects---------------
// const { fri } = workingHours;
// console.log(fri);
const {
  fri: { wake: w, sleep: s },
} = workingHours;
console.log(w, s);

// -----------------handling parameters while destructuring------
me.works(workingHours);
// ////////////////////////////////////////////////////
/////Destructuring in Arrays/////////////////////////
const [hobby1, hobby2] = me.hobbies;
console.log(hobby1, hobby2);

let [color1, , color2] = me.colors;
console.log(color1, color2);

[color1, color2] = [color2, color1];
console.log(color1, color2);

const [favouriteColor, notSoFavourite] = me.color(3, 0);
console.log(favouriteColor, notSoFavourite);

const arr1 = [1, 2, 3, [4, 5, 6]];
[i, , , j] = arr1;
console.log(i, j);
[i, , j, [k, l]] = arr1;
console.log(i, j, k);

// Change the lightness of the color
const changeLightness = (delta, hslStr) => {
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);

  const newLightness = Math.max(
    0,
    Math.min(100, lightness + parseFloat(delta))
  );

  return `hsl(${hue}, ${saturation}%, ${newLightness}%)`;
};
changeLightness(10, "hsl(330, 50%, 50%)"); // 'hsl(330, 50%, 60%)'
changeLightness(-10, "hsl(330, 50%, 50%)"); // 'hsl(330, 50%, 40%)'

// Bubble Soritng in JS
const bubbleSort = (arr) => {
  let swapped = false; //this variable is to check that if any value is swapped in the iteration
  const a = [...arr]; //spread operator for clonning the array
  for (let i = 1; i < a.length; i++) {
    swapped = false;
    for (let j = 0; j < a.length - i; j++) {
      if (a[j + 1] < a[j]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]; //swapping values using Array Destructuring
        swapped = true;
      }
    }
    if (!swapped) return a; //if at any iteration the values are not swapped means array is sorted.
  }
  return a;
};
bubbleSort([20, 10, 40, 30]); // [10, 20, 30, 40]
