//using onclick property
function savedEl(){
console.log('Button Clicked')
}

//using addeventlistener
let savebtn1  = document.getElementById('input-btn');
savebtn1.addEventListener('click', function(){
    console.log('Button clicked using another property');
})
let myLeads=[];
let inputEl=document.getElementById("input-el");
const ulEl =document.getElementById('ul-el');
// console.log(ulEl)

savebtn1.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
})
for(let i = 0; i<myLeads.length; i++){
    // ulEl.textContent +='<li>'+ myLeads[i]+'</li>'
    const liEl= document.createElement('li');
    liEl.textContent += myLeads[i];
    ulEl.append(li);
}