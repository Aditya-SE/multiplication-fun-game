const question = document.getElementById("question");
const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;

question.innerText = `what is ${num1} multiply by ${num2}?`