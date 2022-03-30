const color=["red","green","#f15025","rgba(133,122,200)"];
const btnEl=document.getElementById("btn");
const colors=document.querySelector(".color");

btnEl.addEventListener("click", function()
{
const randomColor=color[getRandomColor()];
document.body.style.background=randomColor;
colors.textContent=randomColor;
});

function getRandomColor()
{
return Math.floor(Math.random()*color.length);
}