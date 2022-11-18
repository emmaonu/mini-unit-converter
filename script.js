/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

let inputEl = document.getElementById("input");
let convertEl = document.getElementById("convert");
let resultLength = document.getElementById("result-length");
let resultVolume = document.getElementById("result-volume");
let resultMass = document.getElementById("result-mass");

convertEl.addEventListener("click", () => {
  //created a variable to store the value
  let baseValue = Number(inputEl.value);
  /*collected the value and used textContent to append it to the resultLength on the page by multiplying the value to Meters and then dividing meters to get feets*/
  resultLength.textContent = `${baseValue} Meters = ${Number(
    baseValue * meterToFeet
  ).toFixed(3)} Feets  | ${baseValue} Feets = ${Number(
    baseValue / meterToFeet
  ).toFixed(3)} Meters`;

  /*collected the value and used textContent to append it to the resultLength on the page muliplying the baseValue to get the number of gallons and the dividing to get the liters by gallons*/
  resultVolume.textContent = `${baseValue} Liters = ${Number(
    baseValue * literToGallon
  ).toFixed(3)} Gallons  | ${baseValue} Gallons = ${Number(
    baseValue / literToGallon
  ).toFixed(3)} Liters`;

  /*collected the value and used textContent to append it to the resultLength on the page muliplying the baseValue to get the number of pounds and the dividing to get the pounds by kilograms*/

  resultMass.textContent = `${baseValue} Kilos = ${Number(
    baseValue * kiloToPound
  ).toFixed(3)} Pounds  | ${baseValue} Pounds = ${Number(
    baseValue / kiloToPound
  ).toFixed(3)} Kilos`;
});

console.log(resultLength);
