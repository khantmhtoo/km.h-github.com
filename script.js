const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".nav");
const projectSec = document.querySelector(".proj__card--container");
const navLinks = document.querySelectorAll(".nav__link");

const levelFunction = (difficulty = 0) => {
  let level = "";
  if (difficulty >= 0 && difficulty <= 3) {
    for (let i = 0; i <= difficulty; i++) {
      if (i === difficulty) {
        return level;
      }
      level += "✰";
    }
  } else if (difficulty > 3 && difficulty <= 6) {
    difficulty -= 3;
    for (let i = 0; i <= difficulty; i++) {
      if (i === difficulty) {
        return level;
      }
      level += "★";
    }
  } else {
    console.log("deny");
  }
};

const toolTags = (tags) => {
  let content = "";
  tags.forEach((tag) => {
    if (tag === "HTML") {
      content += `<span class="html">HTML</span> `;
    } else if (tag === "CSS") {
      content += `<span class="css">CSS</span> `;
    } else {
      content += `<span class="js">JS</span> `;
    }
  });
  return content;
};

const contentData = (element) => {
  let dataStructure = `  
    <div class="proj__card">
      <div class="proj__img--container">
      <img
        class="proj__img"
        src="${element.screenShot}"
        alt=""/>
      </div>
    <div class="proj__content">
      <div class="proj__content--main">
        <h3 class="inner__subtitle proj__link"
          ><a class="proj__link" href="${element.link}"
            >${element.name}</a
          ></h3>
        <span class="proj__rank"
          >${levelFunction(element.difficulty)}</span
        >
      </div>
      <div class="proj__content--sub">
          <div class="proj__content--summary">
            <h4 class="sec__subtitle--content">Description</h4>
            <p class="proj__des">${element.description}</p>
          </div>
          <div class="proj__content--tool">
            <h4 class="sec__subtitle--content">Tools</h4>
            <span class="proj__tool"> ${toolTags(element.tools)} </span>
          </div>
        </div>
      </div>
    </div>`;
  return dataStructure;
};

const projectData = fetch("./projectData.json")
  .then((resp) => {
    return resp.json();
  })
  .then(function (data) {
    data.forEach((element) => {
      projectSec.innerHTML += contentData(element);
    });
  });

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  navbar.classList.toggle("open");
});

navLinks.forEach((element) => {
  element.addEventListener("click", () => {
    toggleBtn.classList.remove("open");
    navbar.classList.remove("open");
  });
});
