const countNum = document.getElementById("count-el");
const prevCt = document.querySelector(".prevCount");

const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const saveBtn = document.getElementById("save");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countNum.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  prevCt.textContent = "Previous Value:";
  countNum.textContent = 0;
});

saveBtn.addEventListener("click", () => {
  let prevCount = " " + count + " - ";
  prevCt.textContent += prevCount;
  countNum.textContent = 0;
  count = 0;
});
