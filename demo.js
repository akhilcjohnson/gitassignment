

let myage = 32;
let humanDogRAtio= 7;
let myDugAge= myage * humanDogRAtio;
console.log(myDugAge);
console.log(myage)
let count =5+7;
console.log(count)

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints=bonusPoints+50;
console.log(bonusPoints);

bonusPoints=bonusPoints-75;
console.log(bonusPoints);

bonusPoints=bonusPoints+45;
console.log(bonusPoints);


// function increment(){
//     console.log('the button was clicked')
// }

function myOwn(){
    console.log(42);
}
myOwn()
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function laps(){
    console.log(lap1+lap2+lap3);
}
laps();

let lapCompleted = 0;
function lapRead(){
    console.log(lapCompleted+=1)
}
lapRead();
lapRead();
lapRead();
console.log(lapCompleted);

// let count1 =0;
// let countEl = document.getElementById('count-el');
// let saveEl = document.getElementById('save-el');

// function increment(){
//     console.log(count1 += 1)
//     countEl.innerText=count1;
// } 

// function save(){
//     let first = count1 + " - ";
//     saveEl.innerText+=first;
//     console.log(`${count1} people counted`)
//     countEl.textContent  =0;
//     count1=0
// }
// save();


let username= "Jesus";
let message = "Good Morning"
let messageToUser = message+ ", "+username;
let myGreetings = messageToUser+ " "+ "dear";
console.log(messageToUser); 
console.log(myGreetings);


let name1= "akhil";
let greetings= "Hi,my name is ";
let myGreeting= greetings+" "+ name1;
console.log(myGreeting);

console.log(5+4);  //9
console.log( "2" + "4") //24
console.log( "5"+ 1);  //51
console.log(100 + "100");  //100100

let firstname = "Akhil ";
let lastname = "C Johnson";
let fulName = firstname + lastname;
console.log(fulName);

let nAme= "delma";
let gReetings = "Hi there";
function greetings01(){
    console.log('"' +gReetings +', '+ nAme +'"');
}
greetings01()

let myPoints = 0;
function add3Points(){
    console.log(myPoints+=3);
}
//add3Points()
function remove1Point(){
    console.log(myPoints-=1);
}
let errorPara = document.getElementById('error');
function err(){
    console.log(`button clicked`)
    errorPara.textContent = `something went wrong, try again later`;
}
add3Points();
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log("2"+2);  //22
console.log(11+7);  //18
console.log(6+"5"); //65
console.log(2+2);  //4
console.log("11"+"14"); //1114

// let num1 = 8;
// let num2 = 2;
// document.getElementById('num1-el').textContent = num1;
// document.getElementById('num2-el').textContent = num2;
// let total = document.getElementById('sum-el');

// function add(){
//     let result = num1 + num2;
//     total.textContent = `sum ${result}`;
// }
// function subtract(){
//     let result = num1 - num2 ;
//     total.textContent = `Subtraction : ${result}`;
// }
// function divide(){
//     let result = num1 /num2 ;
//     total.textContent = `Division : ${result}`;
// }
// function multiply(){
//    let result = num1*num2;
//     total.textContent = `Multiplication: ${result}`;
// }
// add()
// subtract()
// divide()
// multiply()








// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let sum = firstCard + secondCard;
// let cards = [firstCard,secondCard];
// console.log(cards)
//console.log(sum);

// if (sum < 21) {
//   console.log(`Do you want to draw a new card`);
// } else if (sum === 21) {
//   console.log(`you have got blackjack`);
// } else if (sum > 21) {
//   console.log(`you lost game`);
// }

// let yourAge = 21;
// if (yourAge <= 21) {
//   console.log("sorry, you cannot enter to the club");
// } else {
//   console.log("Welcome, Enjoy the party");
// }
// let candyAge = 102;
// if (candyAge < 100) {
//   console.log("not eligible");
// } else if (candyAge === 100) {
//   console.log("Happy Centinal Birthday WIshes and card");
// } else {
//   console.log("Congrats, you already received the wia");
// }

// let isAlive = true;
// let message1 = " ";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardEl = document.getElementById("cards-el");


// function getRandomCard(){
//     if(getRandomCard===1){
//         return 11;
//     }else if (getRandomCard >10){
//         return 10;
//     }else{ 
//     return Math.ceil(Math.random()*13);}
// }
// function startGame() {
    // cardEl.textContent = `Cards: ${firstCard} ${secondCard}`
    // cardEl.textContent = `Cards: ${cards[0]} ${cards[1]}`
//     for (let i = 0; i<cards.length; i++){
//         cardEl.textContent += cards[i]+ " "
//     }
//     sumEl.textContent = `Sum: ${sum}`;
  
//   if (sum <= 20) {
//     message1 = `Do you want to draw a new card`;
//   } else if (sum === 21) {
//     message1 = `you have got blackjack`;
//   } else if (sum > 20) {
//     message1 = `you lost game`;
//     isAlive = false;
//   }
//   console.log(message1);
//   console.log(isAlive);
//   messageEl.textContent = message1;
//   console.log(sum)
// }

function newCard(){
    console.log("Drawing new card")
    let thirdCard = getRandomCard();
    cards.push(thirdCard);
    // console.log(cards);
    sum += thirdCard;
    startGame()
   // console.log(sum)
}

// console.log(4 === 3); // false
// console.log(5 > 2); //true
// console.log(12 > 12); //false
// console.log(3 < 0); //false
// console.log(3 >= 3); //true
// console.log(11 <= 11); //true
// console.log(3 <= 2); //false


// let myFeatures = [ 
//     "7 years of experience", 
//     "B.Tech", 
//     "I have car and bike riding licences", 
//     "I have soft skills" 
//  ]
//  console.log(myFeatures[1])
//  console.log(myFeatures[2])
//  console.log(myFeatures[0])

 let messages1= [
    "hei, How's it doing",
    "I am great, Thank You",
    "All Good,Nice to meet"
 ]
 let newMessage = "same here"

 messages1.push(newMessage);
 console.log(messages1)
 //messages1.pop(messages1[3]);
 //console.log(messages1)

 for(let count = 10; count <= 20; count+=2){
    console.log(count);
 }

 for(let i = 10;i<=100; i+=10){
    console.log(i);
 }
 console.log(messages1)
 let myFeatures = [ 
    "7 years of experience", 
    "B.Tech", 
    "I have car and bike riding licences", 
    "I have soft skills" 
 ]
 for(let i = 0; i< myFeatures.length; i+=1){
    console.log(myFeatures[i]);
 }

 let sentence = ['helo, ', 'my ', 'name ', 'is ', 'peter'];
let greetingsEl = document.getElementById('greeting-el');

for(let i =0; i<sentence.length; i++){
    greetingsEl.textContent += sentence[i];
}

let player1time = 102;
let player2time = 107;
function getTotalRaceTime(){
    return player1time +player2time;
}
let newTime = getTotalRaceTime();
console.log(newTime);

// let randomNumber = Math.random()*6;
// console.log(randomNumber);

// let flooredNumber= Math.floor(2.799);
// console.log(flooredNumber)

// let newNumber = Math.floor(Math.random()*6)+1;
// // console.log(newNumber)

// function rollDice(){
//     return Math.ceil(Math.random()*6);
// }
// console.log(rollDice());


let hasSolvedChallenge= true;
let hasHintsleft=false;

if(hasSolvedChallenge===false && hasHintsleft===false){
    showsolution()
}else{
    console.log('try next time')
}
function showsolution(){
    console.log("showing Solution.....")
}


//making an object
let castle = {
    title: " Live like a king in the castle",
    price: 2000,
    isLuxary: true,
    images:['img/csstle1.png', 'img/front.png']
}
console.log(castle.images[0]);
console.log(castle.price);


//fn inside the object
let person ={
    objname:"Akhil",
    age:32,
    country: "india",
    logData:function(){
        console.log(`${this.objname} is ${this.age} years old and lives in ${this.country}`);
    }
}
person.logData()



//fn outside the function
function logData1(){
    console.log(`${person.objname} is ${person.age} years old man lives in ${person.country}`);
}
logData1()


//using if..else
let age = 17;
if (age<6){
    console.log('free bus fair');
}else if(age>=6 && age<=17){
    console.log(`child discount`);
}else if(age>=18 && age<=26){
    console.log(`student discount`);
}else if(age>=27 && age<=66){
    console.log(`full price`);
}else{
    console.log(`senior citizen discount`)
}


//using for loop
let countries =[ "China", "India", "USA", "Indonesia", "Pakistan" ];
console.log("The 5 largest countries in the world")
for(let i=0; i<countries.length;i++ ){
    console.log("-" + countries[i]);
}


//using array method(pop,push & shift,unshift)
let largeCountries= ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries.pop()
largeCountries.push('Pakistan');
largeCountries.shift()
largeCountries.unshift('China')
console.log(largeCountries);



//using Logical Operator
let dayOfMonth = 13;
let weekday ="Friday";

if (dayOfMonth === 13 && weekday=== "Friday"){
    console.log('Day of Monster')
}


//using math.random
let hands = ['rock', 'paper', 'scisors'];
function press(){ 
    let randomIndex = Math.floor(Math.random()*3);
    let findRandom = hands[randomIndex];
    console.log(findRandom);
}

//sorting of fruits 
let fruits = ["apple", "orange", "apple", "apple", "orange"];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

function sortfruit(){
for(let i =0; i<fruits.length; i++){
    if(fruits[i] == "apple" ){
         appleShelf.textContent += "apple"+"-"
    }else{
         orangeShelf.textContent += "orange"+"-"
    }
}}
sortfruit()

//using addeventlistener
let box1 = document.getElementById('box');
box1.addEventListener('click', function(){
    console.log('i want to open the box');
})

//difference b/w let and const,
const basPrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime= "5-12days";

shippingCost = 15;
shippingTime = "7-14 days";

const fullPrice =  basPrice - discount +shippingCost;

console.log("TotalCost = "+ fullPrice+". It will arrive in "+shippingTime);

const newBtn= document.getElementById('container');

newBtn.innerHTML = "<button onclick='buy()'>Buy!</button>"
function buy(){
    container.innerHTML = "<p>Thankyou for buying</p>"
}
// newBtn.addEventListener('click', function(){
//     console.log('Thankyou for buying:)')
// })
