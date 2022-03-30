// let myTabs=[];  //for storing leads/tabs
// const inputEl=document.getElementById("input-el");
// const inputBtn=document.getElementById("input-btn");
// const ulEl=document.getElementById("ul-el");
// const deleteBtn=document.getElementById("delete-btn");
// // The JSON.parse() method parses a string and returns a JavaScript object.
// //So we will use parse()method to access all the stored tab on local storage 
// const tabsFromLocalStorage=JSON.parse(localStorage.getItem("myTabs"));
// //basically what above line is doing is that the values stored locally are in the form of string so we parse those values and covert them into array.

// const tabBtn=document.getElementById("tab-btn");

// if(tabsFromLocalStorage)
// { 
//     myTabs=tabsFromLocalStorage;
//     render(myTabs);
//     //what we are doing here is : if there is any data stored locally we have to show it to the user that he save these tabs earlier so to see this if apply if conditon and inside if there is any data then it will be in the form of array because we already converted it into array using JSON at line'8'  then first render the old data then go for the next thing.
// }

// //now if the user clicks "save tab" button we have to save the url in the active tab of the active window for that there is only onw way using chrome tab API.

// tabBtn.addEventListener("click", function(){
//   //this is the way to access the url of the active tab
//   chrome.tabs.query({active: true, currentWindow: true},function(tabs)
//   {
//       myTabs.push(tabs[0].url);//store the url to the array
//       localStorage.setItem("myTabs", JSON.stringify(myTabs));
//       console.log(myTabs);
//       render(myTabs);
//   })
// });

// //This function renders and shows all the tabs saved by the user.
// function render(tabs){
//     let listItems= "";
//     for(let i=0;i<tabs.length;i++)
//     {
//         listItems +=`
//     <li> 
//         <a target='_blank href='${leads[i]}'>
//          ${tabs[i]} 
//         </a>
//      </li> ` ;
//     }
//  ulEl.innerHTML=listItems;
// }
// // Now let's handle deleteALL button
// // so it is simple we have to clear our local storage
// deleteBtn.addEventListener("dblclick" ,function(){
//   localStorage.clear();
//   myTabs=[];
//   render(myTabs);
// });

// // let's handle the last thing which is what happens when the user writes something in the text field and click save input
// //so basically we will push this into our myTabs[] array and store it into our local storage
// inputBtn.addEventListener("click" ,function(){
//    myTabs.push(inputEl.value);  //this is how we access the text fields value and give it to a variable
//    inputEl.value= " ";  //we need empty the text field for the next coming data
//    localStorage.setItem("myTabs", JSON.stringify(myTabs));
//    //since JSON only supports string we need to covert the array to string then only we can put them in localStrorage.
//    render(myTabs);
// });