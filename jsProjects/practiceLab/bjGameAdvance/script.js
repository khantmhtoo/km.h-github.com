const startBtn = document.querySelector(".start-btn");
const drawBtn = document.querySelector(".draw-btn");
const cardEl = document.querySelector(".card-el");
const sumEl = document.querySelector(".sum-el");

startBtn.addEventListener("click", startGame);
drawBtn.addEventListener("click", drawCard);

let firstCard = randomCard();
let secondCard = randomCard();
let isAlive = false;
let cardHand = [];

cardEl.textContent = "Cards: ";

let sum = firstCard + secondCard;

function startGame() {
  renderGame();
  isAlive = true;
  sumEl.textContent = "Sum: " + sum;
}

function renderGame() {
  cardHand = [firstCard, secondCard];
  for (let i = 0; i < cardHand.length; i++) {
    cardEl.textContent += cardHand[i] + " | ";
  }
}

function randomCard() {
  let value = Math.floor(Math.random() * 13 + 1);
  if (value > 10) {
    return 10;
  } else if (value === 1) {
    return 11;
  } else {
    return value;
  }
}

function drawCard() {
  let newCard = randomCard();
  cardHand.push(newCard);
  console.log(newCard);
  console.log(cardHand);
  sum += newCard;
  return sum;
}

if (isAlive) {
  if (sum < 21) {
    console.log("Do you want to draw?");
  } else if (sum === 21) {
    console.log("BLACK JACK!!!");
    isAlive = false;
  } else {
    console.log("You have lost.");
    isAlive = false;
  }
}
