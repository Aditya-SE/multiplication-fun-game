const question = document.getElementById("question");
const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

question.innerText = `what is ${num1} multiply by ${num2}?`;

let score = 0;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns == correctAns){
        score++;
        
    }else{
        score--;
        
    }
});


