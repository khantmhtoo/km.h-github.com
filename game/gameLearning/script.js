const body = document.querySelector("body");

const canvas = document.createElement("canvas");
canvas.classList.add("canvas");

window.onload = function () {
  body.appendChild(canvas);
  let img = new Image();
  img.src =
    "https://images.vexels.com/media/users/3/185791/isolated/preview/27c69d1413163918103a032d4951213e-aguacate-guinando-un-ojo-kawaii.png";

  context.drawImage(img, 50, 50, 100, 100);
};
