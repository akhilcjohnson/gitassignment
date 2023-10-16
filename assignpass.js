let count1 =0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment(){
    console.log(count1 += 1)
    countEl.innerText=count1;
} 

function save(){
    let first = count1 + " - ";
    saveEl.innerText+=first;
    console.log(`${count1} people counted`)
    countEl.textContent  =0;
    count1=0
}
save();