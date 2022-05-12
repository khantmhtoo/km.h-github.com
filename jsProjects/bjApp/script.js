const msgOp = document.querySelector("#message-el");
const sumOp = document.getElementById("sum-el");
const cardOp = document.getElementById("card-el");
const newC = document.querySelector(".new-card");
const playerEl = document.querySelector("#player-el");

let message = "";
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let cards = [];

let player = {
  name: "Per",
  chips: 145,
  sayHello: function () {
    alert("hello", this.name);
  },
};

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;

  newC.style.background = "goldenrod";
  newC.style.color = "green";

  renderGame();
}

function renderGame() {
  cardOp.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardOp.textContent += cards[i] + " ";
  }

  sumOp.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }

  msgOp.textContent = message;
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let nCard = getRandomCard();
    cards.push(nCard);
    sum += nCard;
    renderGame();
  } else {
    newC.style.background = "red";
    newC.style.color = "black";
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

//   for (let i in cards) {
//     total += cards[i] + " ";
//   }
// for (let i of cards) {
//     total += i + " ";
//   }
