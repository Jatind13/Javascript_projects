/*
===============================================================================
PRO CODE
===============================================================================*/ 
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");  //gives us a NodeList  by selecting all the elemnts with the class of '.btn'

btns.forEach(function (btn) {  //using forEach() we can iterate in the NodeList and inside forEach we have a callback function
  btn.addEventListener("click", function (e) {
    //instead of selecting all the buttons one by one we can use the 'btn' class and inside that we have a function with the 'e' event object.
    const styles = e.currentTarget.classList;
    //'e' or 'event' object ->Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).
    //and we will store the event/element int the styles variable.
    //The currentTarget-> event property returns the element whose event listeners triggered the event.
    //classList->gives all the classsesthat elemnt has.
    //so basically we are doing is that we are storing the classlist of the element in this case it's button which is pressed or clicked.So example when we click decrease our style variable will have all the classes that our decrease button had.
    if (styles.contains("decrease")) {
      //if styles variable contains this specific class then do the count++
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";  //if +ve gree else if -ve red else the white color.
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "white";
    }
    value.textContent = count;
  });
});


/*
==============================================================================
NOOB CODE
============================================================================== */
// let counter=0;
// const decreaseEl=document.getElementById("decrease-counter");
// const resetEl=document.getElementById("reset-counter");
// const increaseEl=document.getElementById("increase-counter");
// const valueEl=document.getElementById("value");

// increaseEl.addEventListener("click", function()
// {
//    counter++;
//    valueEl.textContent=counter;
//    if(counter>0)
//    {
//       valueEl.style.color="green";
//    }

// });
// decreaseEl.addEventListener("click" ,function()
// {
//    counter--;
//     valueEl.textContent=counter;
//     if(counter<0)
//     {
//         valueEl.style.color="red";
//     }
// });
// resetEl.addEventListener("click" ,function(){
//     counter=0;
//     valueEl.textContent=counter;
//     valueEl.style.color="white";
// });