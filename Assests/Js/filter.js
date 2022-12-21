let inputs = document.querySelectorAll(".field input");

inputs.forEach((inp) => inp.addEventListener("input", generateFilter));

function generateFilter() {
  let blurValue = document.getElementById("blurValue").value;
  let brightnessValue = document.getElementById("brightnessValue").value;
  let contrastValue = document.getElementById("contrastValue").value;
  let grayscaleValue = document.getElementById("grayscaleValue").value;
  let hueValue = document.getElementById("hueValue").value;
  let invertValue = document.getElementById("invertValue").value;
  let saturateValue = document.getElementById("saturateValue").value;
  let sepiaValue = document.getElementById("sepiaValue").value;

 

  let filterValue = `blur(${blurValue}px) brightness(${brightnessValue}%) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueValue}deg) invert(${invertValue}%) sepia(${sepiaValue}%) saturate(${saturateValue}%)`;

  document.getElementById("element").style.filter = filterValue;
  document.getElementById("copyCode").innerHTML = `filter: ${filterValue};`;
};


generateFilter();