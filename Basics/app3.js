// Destructuring in Javascript
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const me = {
  name: "Jatin",
  hobbies: ["Reading", "Coding", "Playing", "Writing"],
  colors: ["red", "green", "yellow", "black"],
  color: function (ind1, ind2) {
    return [this.colors[ind1], this.colors[ind2]];
  },
};

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
