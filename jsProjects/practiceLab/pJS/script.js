const bodySelect = document.querySelector("body");
const title = document.querySelector(".clickme");
const btnCM = document.querySelector(".btn");
const countedVal = document.querySelector(".counted");

// let state = false;

// btnCM.addEventListener("click", () => {
//   if (!state) {
//     bodySelect.style.background = "blue";
//     state = true;
//   } else {
//     bodySelect.style.background = "red";
//     state = false;
//   }
// });

let count = 0;

const rgb = btnCM.addEventListener("click", () => {
  bodySelect.style.background = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

  count++;
  countedVal.textContent = count;

  if (count >= 1) {
    title.textContent = "Click Again";
  }
});
