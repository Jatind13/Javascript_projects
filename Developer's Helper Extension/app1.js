let myLeads=[];

// myLeads=JSON.parse(myLeads);->converts string to array/object
// console.log(typeof myLeads);

// myLeads=JSON.stringify(myLeads); //coverts to string
// console.log(typeof myLeads)
//  myLeads.push("hello world");
//  myLeads=JSON.stringify(myLeads);
//  console.log(typeof myLeads);



const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn"); 
const tabBtn=document.getElementById("tab-btn");
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
// localStorage.setItem("myLeads" , "www.example.com");
//console.log(localStorage.getItem("myLeads"))
//localStorage.clear();
// localStorage.clear();

// console.log(leadsFromLocalStorage);
// console.log(leadsFromLocalStorage);
if(leadsFromLocalStorage)
{
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click" , function()
{ 
    //Let's talk with the chromeAPI.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",  JSON.stringify(myLeads))
        render(myLeads);
   
     });
    
    // console.log(tabs[0].url);
});
function render(leads)
{
let listItems="";
for(let i=0;i< leads.length;i++)
{
   listItems += `
   <li>
       <a target='_blank' href='${leads[i]}'> 
        ${leads[i]} 
       </a>
   </li>
   ` 
}
ulEl.innerHTML=listItems;
}
deleteBtn.addEventListener("dblclick" , function()
{
localStorage.clear();
myLeads=[];
render(myLeads)// clear's the DOM

});

inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);

    //to verify
   // console.log(localStorage.getItem("myLeads"))
});


