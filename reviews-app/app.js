const reviews = [
    {
      id: 1,
      name: "jatin dixit",
      job: "software developer",
      img: "./images/profile-pic (1).png" ,
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:"./images/person2.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
      "./images/person3.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
      "./images/person4.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const img=document.getElementById("person-img");
  const job=document.getElementById("job");
  const author=document.getElementById("author");
  const info=document.getElementById("info");

  const prevButton=document.querySelector(".prev-button");
  const nextButton=document.querySelector(".next-button");
  const randomBtn=document.querySelector(".random-btn");

  let currentItem=0;

  window.addEventListener("DOMContentLoaded" ,function()
  {
    showPerson();
  });

function showPerson()
{
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent= item.job;
    info.textContent= item.text;
}
 
nextButton.addEventListener("click" ,function()
{
currentItem++;
if(currentItem > reviews.length-1){
    currentItem=0;
}
showPerson();
});

prevButton.addEventListener("click" ,function()
{
currentItem--;
if(currentItem < 0){
    currentItem=reviews.length-1;
}
showPerson();
});
randomBtn.addEventListener("click", function()
{
   currentItem= Math.floor(Math.random()* reviews.length);
   showPerson();
});