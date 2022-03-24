let count=0;
let countEl=document.getElementById("count-el");
let countSave=document.getElementById("count-save");


function increment()
{
    count+=1;
    countEl.innerHTML=count;

}
function save()
{
    let savedCount=count + " - "
   countSave.innerText+=savedCount;
     countEl.innerText=0;
     count=0;
}