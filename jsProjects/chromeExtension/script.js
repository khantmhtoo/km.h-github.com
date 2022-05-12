const inputEl = document.querySelector(".input-el");
const inputBtn = document.querySelector(".input-btn");
const deleteBtn = document.querySelector(".delete-btn");
const saveBtn = document.querySelector(".save-btn");
const ulEl = document.querySelector(".unorderEl");

let myLeads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i of leads) {
    listItems += `<li><a target='_blank' href='${i}'>${i}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }
});

deleteBtn.addEventListener("click", function () {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
});

saveBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
