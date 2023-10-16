let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let total = document.getElementById('sum-el');

function add(){
    let result = num1 + num2;
    total.textContent = `sum ${result}`;
}
function subtract(){
    let result = num1 - num2 ;
    total.textContent = `Subtraction : ${result}`;
}
function divide(){
    let result = num1 /num2 ;
    total.textContent = `Division : ${result}`;
}
function multiply(){
   let result = num1*num2;
    total.textContent = `Multiplication: ${result}`;
}
add()
subtract()
divide()
multiply()