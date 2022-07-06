const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".nav");
const projectSec = document.querySelector(".proj__card--container");
const navLinks = document.querySelectorAll(".nav__link");
const button = document.querySelector(".form__submit--btn");
const aboutSkillContainer = document.querySelector(".about__section--skill");
const buttonHeroContainer = document.querySelectorAll(
  ".button__container button"
);

const heroSubtitle = ["Self Learner", "Web Developer", "Networking Grad"];
const heroContainer = document.querySelector(".sec__subtitle--hero");
let counter = 0;

const heroSubtitleChanger = () => {
  setInterval(() => {
    if (counter < heroSubtitle.length) {
      let heroList = document.querySelectorAll(".hero__lists");
      if (!(heroList.length == 0)) {
        heroContainer.innerHTML = "";
        let createdList = document.createElement("li");
        createdList.classList.add("hero__lists");
        createdList.innerText = heroSubtitle[counter];
        heroContainer.append(createdList);
      } else {
        let createdList = document.createElement("li");
        createdList.classList.add(" heroSubtitle__lists");
        createdList.innerText = heroSubtitle[counter];
        heroContainer.append(createdList);
      }
    } else if (counter === heroSubtitle.length) {
      counter = -1;
    } else {
      return;
    }
    counter++;
  }, 2000);
};

heroSubtitleChanger();

const skillSet = [
  { skill: "HTML", level: 100 },
  { skill: "CSS", level: 80 },
  { skill: "JS", level: 60 },
  { skill: "React", level: 10 },
];

const skillSetContainer = skillSet.forEach((element) => {
  const skillAbout = `
          <div class="skill__task">
            <div class="skill__title">
              <span>${element.skill}</span>
              <span>${element.level}%</span>
            </div>
            <div class="skill__container">
              <div class="skill__percentage" style="width: ${element.level}%"></div>
            </div>
          </div>`;
  aboutSkillContainer.innerHTML += skillAbout;
});

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
    let state = "all";

    const projectBtns = document.querySelectorAll("#project button");
    projectBtns.forEach((element) => {
      return element.addEventListener("click", () => {
        return element.textContent;
      });
    });

    data.forEach((element) => {
      projectSec.innerHTML += contentData(element);
      console.log(element);
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
