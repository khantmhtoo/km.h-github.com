const btn = document.querySelector(".btn");
const share = document.querySelector(".share-container");
const arrow = document.querySelector(".arrow-down");

let state = false;

btn.addEventListener("click", () => {
  if (!state) {
    share.style.zIndex = -1;
    arrow.style.background = "transparent";
    state = true;
  } else {
    state = false;
    arrow.style.background = "var(--clr-vgblue)";
    share.style.zIndex = 100;
  }
});
