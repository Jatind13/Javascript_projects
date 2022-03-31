let counter=0;
const decreaseEl=document.getElementById("decrease-counter");
const resetEl=document.getElementById("reset-counter");
const increaseEl=document.getElementById("increase-counter");
const valueEl=document.getElementById("value");

increaseEl.addEventListener("click", function()
{
   counter++;
   valueEl.textContent=counter;
   if(counter>0)
   {
      valueEl.style.color="green";
   }

});
decreaseEl.addEventListener("click" ,function()
{
   counter--;
    valueEl.textContent=counter;
    if(counter<0)
    {
        valueEl.style.color="red";
    }
});
resetEl.addEventListener("click" ,function(){
    counter=0;
    valueEl.textContent=counter;
    valueEl.style.color="white";
});