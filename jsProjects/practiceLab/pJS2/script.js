const body = document.querySelector("body");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (body.classList != "red") {
    body.classList.add("red");
    body.classList.remove("blue");
  } else {
    body.classList.add("blue");
    body.classList.remove("red");
  }
  console.log("working");
});
