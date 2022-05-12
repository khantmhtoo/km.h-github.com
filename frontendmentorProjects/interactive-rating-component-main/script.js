const ratingBtn = document.querySelectorAll(".rating .btn");
const submitBtn = document.querySelector(".submit-btn");
const contextContainer = document.querySelector(".container");

let ratingScore = 1;
let selected = false;
let ratingData = "";
let dataReceived = [];

for (let btn of ratingBtn) {
  btn.setAttribute("data-value", ratingScore);
  ratingScore++;
}

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    for (let i of ratingBtn) {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
      btn.classList.add("active");
      selected = true;
    }
  });
});

submitBtn.addEventListener("click", (e) => {
  for (let i of ratingBtn) {
    if (i.classList.contains("active")) {
      ratingData = i.getAttribute("data-value");
    }
  }
  if (!selected) {
    console.log("Has not selected yet");
  } else {
    const outPut = `
    <div class="centering">
        <img class="thankyou-img" src="images/illustration-thank-you.svg" alt="thankyou"/>
        <div class="answer">
            <span class="results">You selected ${ratingData} out of 5</span>
        </div>
        <div class="appreciation">
            <h2 class="regards">Thank you!</h2>
            <p class="regards-context">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </div>
    </div>`;
    dataReceived.push(ratingData);
    contextContainer.innerHTML = outPut;
  }
});
