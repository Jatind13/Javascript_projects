"use strict";

console.log("Hello World!");

const x = 35;
const name = "Jatin";

const styles = [
  "color:red",
  "background:yellow",
  "font-size:20",
  "border-radius:2px solid black",
  "text-shadow:1px 1px black",
  "padding:10",
].join(";");
//concatenate the array items into
//a string separated by semi-colon

console.log("%c Hello There", styles);
//%c applies the styles to the following text

const daysFromNow = (n) => {
  let d = new Date();
  d.setDate(d.getDate() + Math.abs(n));
  return d.toISOString().split("T")[0];
};

console.log(daysFromNow(5));
