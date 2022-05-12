const input = document.querySelector(".input");
const lengthOp = document.querySelector(".length");
const volumeOp = document.querySelector(".volume");
const massOp = document.querySelector(".mass");

// Conversion Metrics
let lengthCon = 3.2808;
let volumeCon = 0.264172;
let massCon = 0.453592;

let conValue = prompt("Enter a value: ");
if (isNaN(conValue)) {
  conValue = 0;
}

input.innerText = conValue;

function firstConversion(conMetrics) {
  let firstConversion = conValue * conMetrics;
  return firstConversion.toFixed(3);
}

function secondConversion(conMetrics) {
  let secondConversion = conValue / conMetrics;
  return secondConversion.toFixed(3);
}

lengthOp.textContent =
  conValue +
  " meters = " +
  firstConversion(lengthCon) +
  " feets | " +
  conValue +
  " feets = " +
  secondConversion(lengthCon) +
  " meters";

volumeOp.textContent =
  conValue +
  " liters = " +
  firstConversion(volumeCon) +
  " gallons | " +
  conValue +
  " gallons = " +
  secondConversion(volumeCon) +
  " liters ";

massOp.textContent =
  conValue +
  " kilos = " +
  secondConversion(massCon) +
  " pounds | " +
  conValue +
  " pounds = " +
  firstConversion(massCon) +
  " kilos";
