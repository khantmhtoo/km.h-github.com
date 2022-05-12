const menuBtn = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav");

let menuState = false;

menuBtn.addEventListener("click", () => {
  if (!menuState) {
    menuState = true;
    menuBtn.classList.add("closed");
    navMenu.classList.remove("display-off");
  } else {
    menuState = false;
    menuBtn.classList.remove("closed");
    navMenu.classList.add("display-off");
  }
});
