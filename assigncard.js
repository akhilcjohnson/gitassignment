let player = {
  name01:"akhil",
  chips:250
}
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let cards = [firstCard,secondCard];

let isAlive = true;
let message1 = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let playerEl = document.getElementById("para-el");
//console.log(playerEl);

playerEl.textContent = `${player.name01}: $ ${player.chips}`;
function getRandomCard(){
    if(getRandomCard===1){
        return 11;
    }else if (getRandomCard >10){
        return 10;
    }else{ 
    return Math.ceil(Math.random()*13);}
}
function startGame() {
    for (let i = 0; i<cards.length; i++){
        cardEl.textContent += cards[i]+ " "
    }
    sumEl.textContent = `Sum: ${sum}`;
  
  if (sum <= 20) {
    message1 = `Do you want to draw a new card`;
  } else if (sum === 21) {
    message1 = `you have got blackjack`;
  } else if (sum > 20) {
    message1 = `you lost game`;
    isAlive = false;
  }
  console.log(message1);
  console.log(isAlive);
  messageEl.textContent = message1;
  console.log(sum)
}

function newCard(){
    console.log("Drawing new card")
    let thirdCard = getRandomCard();
    cards.push(thirdCard);
    // console.log(cards);
    sum += thirdCard;
    startGame()
   // console.log(sum)
}
