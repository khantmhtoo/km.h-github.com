const washCarBtn = document.querySelector(".wash-btn");
const mowLawnBtn = document.querySelector(".mow-btn");
const pullWeedBtn = document.querySelector(".pull-btn");
const taskContent = document.querySelector(".task-content");
const inVoiceSum = document.querySelector(".invoice-sum");
const inVoiceInfo = document.querySelector(".invoice-info");
const sendBtn = document.querySelector(".send-btn"); //RESET BTN IN THIS CASE

let totalSum = 0;
let task = "";
let cartList = [];

const services = [
  {
    service: "Wash Car",
    cost: 10,
  },
  {
    service: "Mow Lawn",
    cost: 20,
  },
  {
    service: "Pull Weeds",
    cost: 30,
  },
];

function render(index) {
  if (!cartList.includes(services[index].service)) {
    cartList.push(services[index].service);
    renderTask(index);
    renderCost(index, 1);
  }
  console.log(cartList);
}

function remove(index) {
  let removedTask = cartList.splice(
    cartList.indexOf(services[index].service),
    1
  ); //Removes the current index

  if (!cartList.includes(removedTask)) {
    renderCost(index, 0);
  }

  console.log(cartList);
}

function renderCost(index, type) {
  if (type === 1) {
    totalSum += services[index].cost;
  } else {
    totalSum -= services[index].cost;
  }

  if (totalSum > 0) {
    inVoiceInfo.classList.remove("display");
  } else {
    inVoiceInfo.classList.add("display");
  }
  inVoiceSum.textContent = `$ ${totalSum}`;
}

function renderTask(index) {
  task = `
  <div class="task">
    <span>${services[index].service}</span>
    <button class="remove" onclick="remove(${index})">remove</button>
    <span>$ ${services[index].cost}</span>
  </div>`;

  taskContent.innerHTML += task;
}

washCarBtn.addEventListener("click", function () {
  render(0);
});

mowLawnBtn.addEventListener("click", function () {
  render(1);
});

pullWeedBtn.addEventListener("click", function () {
  render(2);
});

sendBtn.addEventListener("click", function () {
  taskContent.innerHTML = "";
  cartList = [];
  totalSum = 0;
  inVoiceSum.textContent = `$ ${totalSum}`;
  inVoiceInfo.classList.add("display");
});
