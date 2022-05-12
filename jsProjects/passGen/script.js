const genBtn = document.querySelector(".gen-pass");
const passContainer = document.querySelectorAll(".pass");
const numSet = document.querySelector(".input-num-pass");

let possChar =
  "\"abcefghijklmnopqrstuvwxyz,./;'[]-=`1234567890-=<>?:{}~!@#$%^&*()_+ABCEDFGHIJKLMNOPQRSTUVWXYZ";
let aPossChar = Array.from(possChar);
let pass = "";

genBtn.addEventListener("click", generateBtn);

function generateBtn() {
  for (let i = 0; i < 4; i++) {
    passContainer[i].textContent = generatedPass();
    pass = "";
  }
}

function randomCharGenerator() {
  return aPossChar[Math.floor(Math.random() * aPossChar.length)];
}

function generatedPass() {
  let numGenTimes = numSet.value;
  for (let times = 0; times < numGenTimes; times++) {
    let randomNum = randomCharGenerator();
    pass += randomNum;
  }
  return pass;
}
