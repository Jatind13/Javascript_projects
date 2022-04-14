// ---------------------using selectors inside element method--------------------------------------------------

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});






//------------------------------------traversing the DOM-----------------------------------------------

// const btns=document.querySelectorAll(".question-btn");
// console.log(btns);

// btns.forEach(function(btn)
// {
//     btn.addEventListener("click",function(e)
//     {
//     const question=e.currentTarget.parentElement.parentElement;   //in this line basically we are traversing the dom by acessing the parent of the parent for question button.

//     question.classList.toggle("show-text"); //but here is one problem,when we click plus and the answer opens and when we click on anothe rbutton then the previous shpild clos but doing this part by traversing dom is quite a tedious task so we will do this part using selectors inside the element

//     });
// });