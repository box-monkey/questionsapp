// solution 1 --------------------------------------------
//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // console.log(question);
  const btn = question.querySelector(".question-btn");
//   console.log(btn);
btn.addEventListener("click", function () {
    // clicking a button if it doesnt match the question it will close
    // ex... question 1 is open, clicking on question 2 will open question 2 and close question 1. 
questions.forEach(function(item) {
    if(item !== question) {
 item.classList.remove('show-text');
    }
})





    // callback function referencing the parameter on line 5 which is acessing our button within the article tag in index.html
    question.classList.toggle('show-text');
})
});

// solution 2 ------------------------------------------

// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function (e) {
//         // parent element traverses the dom aka moves up in the chain of index.html
//        const question = e.currentTarget.parentElement.parentElement;
//        question.classList.toggle('show-text');
//     })
// })
