const adviceNumber = document.querySelector(".advice__num");
const adviceDisplay = document.querySelector(".advice__content");
const adviceChangeBtn = document.querySelector(".btn");

function displayAdvice(advice, id) {
  adviceNumber.textContent = id;
  adviceDisplay.textContent = advice;
}

function connectAPI(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayAdvice(data.slip.advice, data.slip.id));
}

connectAPI("https://api.adviceslip.com/advice");

const changeAdvice = adviceChangeBtn.addEventListener("click", () => {
  connectAPI("https://api.adviceslip.com/advice");
});
