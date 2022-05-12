const headerContent = document.querySelector("header");

// const greenFrog = {
//   name: "Froggy",
//   color: "red",
//   height: "1 feet",
//   weight: "30 pounds",
// };

// const redFrog = {
//   name: "Reddy",
//   color: "red",
//   height: "1 feet",
//   weight: "30 pounds",
// };

// const addFrog = function (currFrog) {
//   const newDiv = document.createElement("div");
//   frogInfo = `<h2>${currFrog.name}</h2>
//     <ul>
//       <li>Color: ${currFrog.color}</li>
//       <li>Height: ${currFrog.height}</li>
//       <li>Weight: ${currFrog.weight}</li>
//     </ul>
//   `;
//   newDiv.innerHTML = frogInfo;
//   return newDiv;
// };

// headerContent.append(addFrog(greenFrog));
// headerContent.append(addFrog(redFrog));

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  description:
    "A green kids backpack designed to make the lid look like the face of a frog sticking out its tongue.",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

const newArticle = (objectFrog) => {
  const newA = document.createElement("article");
  newA.innerHTML = content;
  newA.append(newFigCaption(objectFrog));
  return newA;
};

const newFigCaption = (object) => {
  const newFig = document.createElement("figure");
  const newImg = document.createElement("img");
  newImg.setAttribute("alt", "");
  newImg.setAttribute("src", object.images);
  let newFigCap = document.createElement("figcaption");
  newFigCap.textContent = object.description;
  newFig.append(newImg, newFigCap);
  return newFig;
};

headerContent.append(newArticle(frogpack));
